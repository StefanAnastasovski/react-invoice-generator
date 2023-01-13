import React, { Dispatch, useCallback, useRef, useState } from "react";
import { useDropzone, FileRejection } from "react-dropzone";
import { Input, useTheme } from "@mui/material";
import { BoxDiv, BoxFlex } from "../atoms/Box";
import { Paragraph } from "../atoms/Typography/Paragraph";
import { UploadImageIcon } from "@icons/UploadImageIcon";
import { useEffect } from "react";
import { FormikProps } from "formik";

const CONTENT = {
  TITLE: "Select Files",
  SUBTITLE: "Drag 'n' drop a file here or click",
  DRAG_MESSAGE: "Drop the files here...",
  DRAG_SUPPORTED_FORMATS: "Sorry, only images are supported.",
};

const returnMessage = ({
  acceptedFiles,
  fileRejections,
  style,
  isDragReject,
}: {
  acceptedFiles: File[];
  fileRejections: FileRejection[];
  isDragReject: boolean;
  style: any;
}) => {
  const dragAcceptMessage =
    acceptedFiles.length > 0 ? (
      <Paragraph style={style.color}>{acceptedFiles[0].name}</Paragraph>
    ) : (
      <React.Fragment>
        <Paragraph bold style={{ ...style.color, ...style.acceptTitle }}>
          {CONTENT.TITLE}
        </Paragraph>
        <Paragraph style={{ ...style.color, ...style.acceptFontSize }}>
          {CONTENT.SUBTITLE}
        </Paragraph>
      </React.Fragment>
    );

  const dragUsedMessage =
    acceptedFiles.length === 0 && fileRejections.length > 0 ? (
      <Paragraph
        style={{
          ...style.color,
          ...style.rejectMessage,
        }}
      >
        {`*** ${fileRejections[0]?.errors[0]?.message}`}
      </Paragraph>
    ) : (
      dragAcceptMessage
    );

  const isDragActiveMessage = !isDragReject ? (
    <Paragraph style={style.color}>{CONTENT.DRAG_MESSAGE}</Paragraph>
  ) : (
    <Paragraph style={style.color}>{CONTENT.DRAG_SUPPORTED_FORMATS}</Paragraph>
  );

  return {
    dragAcceptMessage,
    dragUsedMessage,
    isDragActiveMessage,
  };
};

export const DropzoneComponent = ({
  setFile,
  name,
  formik,
}: {
  setFile?: Dispatch<any>;
  name: string;
  formik: FormikProps<any>;
}) => {
  const theme = useTheme();
  const [activeColor, setActiveColor] = useState<string>(
    theme.palette.grey.A400
  );
  const activeRef = useRef<boolean | null>(null);
  const style = styles(activeColor);
  const { touched, errors } = formik;
  const errorMsg = errors[name] as string;
  const isError = touched[name] && Boolean(errors[name]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    formik.values[name] = acceptedFiles[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
    isDragActive,
  } = useDropzone({
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
      "image/svg+xml": [],
    },
    onDrop,
  });
  const { ref, ...restRootProps } = getRootProps();
  const inputProps = getInputProps();

  const messages = returnMessage({
    acceptedFiles,
    fileRejections,
    isDragReject,
    style,
  });

  useEffect(() => {
    if ((isDragActive && !activeRef.current) || isDragAccept) {
      activeRef.current = true;
      return setActiveColor(theme.palette.success.main);
    }
    if (isDragReject && activeRef.current) {
      return setActiveColor(theme.palette.error.main);
    }
    if (acceptedFiles.length > 0) {
      return setActiveColor(theme.palette.success.main);
    }
    if (fileRejections.length > 0) {
      return setActiveColor(theme.palette.error.main);
    }
    if (isError) {
      return setActiveColor(theme.palette.error.main);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    isDragAccept,
    isDragActive,
    isDragReject,
    fileRejections,
    acceptedFiles,
    errors,
  ]);

  return (
    <>
      <BoxFlex style={style.container} {...restRootProps}>
        <Input inputProps={{ ...inputProps }} />

        <BoxDiv>
          <UploadImageIcon width={85} height={85} fill={activeColor} />
        </BoxDiv>

        <BoxDiv style={style.messageContainer}>
          {isDragActive
            ? messages.isDragActiveMessage
            : messages.dragUsedMessage}
        </BoxDiv>
      </BoxFlex>
      {isError && <Paragraph style={style.color}>{errorMsg}</Paragraph>}
    </>
  );
};

const styles = (activeColor: string) => {
  return {
    container: {
      border: `1px dotted ${activeColor}`,
      borderRadius: 4,
      paddingX: 3,
      paddingY: 6,
    },
    messageContainer: {
      alignSelf: "center",
      paddingLeft: 2,
    },
    color: {
      color: activeColor,
    },
    rejectMessage: {
      paddingTop: 2,
      wordBreak: "break-all",
    },
    acceptFontSize: {
      fontSize: 16,
    },
    acceptTitle: {
      paddingBottom: 1,
    },
  };
};
