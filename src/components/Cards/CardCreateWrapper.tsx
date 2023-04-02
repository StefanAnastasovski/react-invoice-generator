import React from "react";
import { TextField, Theme, Typography, useTheme } from "@mui/material";
import { BasicCard } from "@components/atoms/Card";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { CustomSelect } from "@components/atoms/Select";
import { DropzoneComponent } from "@components/Dropzone";
import { joinStyles } from "@utils/styleUtils";
import { CustomCheckbox } from "@components/atoms/Checkbox";
import { MAPPED_FIELD_TYPES } from "@constants/constants";
import {
  CardContentProps,
  CardItemsProps,
  CardProps,
} from "types/components/CardProps";

const DROPZONE_FIELDS = ["service-image"];

const renderItems = ({
  serviceData,
  formik,
  style,
  textAreaProps,
}: CardItemsProps) => {
  return serviceData.map((item: any) => {
    if (item.type === MAPPED_FIELD_TYPES.checkbox) {
      return (
        <CustomCheckbox
          key={item.id}
          item={item}
          formik={formik}
          style={style}
        />
      );
    }

    return item?.items ? (
      <ServiceCustomSelect
        key={item.id}
        item={item}
        formik={formik}
        style={style}
      />
    ) : (
      <ServiceTextField
        key={item.id}
        item={item}
        formik={formik}
        style={style}
        textAreaProps={textAreaProps}
      />
    );
  });
};

const CardContent = ({
  title,
  subtitle,
  serviceData,
  formik,
  style,
  buttonComponent,
  textAreaProps,
}: CardContentProps) => {
  const isServiceDataEmpty = Boolean(serviceData);
  const isImage = DROPZONE_FIELDS.includes(serviceData?.[0]?.name as string);
  return (
    <BasicCard
      key={title}
      containerStyle={joinStyles([
        style.outerContainer,
        style?.outerContainerStyle,
      ])}
      cardContent={
        <>
          <BoxFlex
            style={joinStyles([
              style.innerContainer,
              style?.innerContainerStyle,
            ])}
          >
            {/* Card Title */}
            {Boolean(title) && (
              <BoxDiv style={style.leftCardContainer}>
                <Typography variant="h6">{title}</Typography>
                {subtitle ?? (
                  <Typography variant="subtitle2" style={style.subtitle}>
                    {subtitle}
                  </Typography>
                )}
              </BoxDiv>
            )}

            {/* Render Items or Dropzone for uploadign file */}
            <BoxDiv style={style.rightCardContainer}>
              {isServiceDataEmpty && serviceData && !isImage ? (
                renderItems({ serviceData, formik, style, textAreaProps })
              ) : (
                <DropzoneComponent formik={formik} name="service-image" />
              )}
            </BoxDiv>
          </BoxFlex>

          {/* Action Buttons inside card */}
          {Boolean(buttonComponent) && (
            <BoxDiv style={style?.buttonContainerStyle}>
              {buttonComponent}
            </BoxDiv>
          )}
        </>
      }
    />
  );
};

export const CardCreateWrapper = (props: CardProps) => {
  const { title, customStyle } = props;
  const theme = useTheme();
  /**
   * extend style with customStyle
   */
  const style = {
    ...styles(theme),
    outerContainerStyle: customStyle?.outerContainerStyle,
    innerContainerStyle: customStyle?.innerContainerStyle,
    serviceTextFieldStyle: customStyle?.serviceTextFieldStyle,
    buttonContainerStyle: customStyle?.buttonContainerStyle,
    checkboxLabelTypographyStyle: customStyle?.checkboxLabelTypographyStyle,
    checkboxLabelStyle: customStyle?.checkboxLabelStyle,
  };

  return (
    <BasicCard
      key={title}
      containerStyle={joinStyles([
        style.outerContainer,
        style?.outerContainerStyle,
      ])}
      cardContent={<CardContent {...props} style={style} />}
    />
  );
};

const ServiceCustomSelect = ({ item, formik, style }: any) => {
  return (
    <CustomSelect
      label={item.label}
      selectId={item.name}
      selectName={item.name}
      value={formik.values[item.name] as string}
      itemList={item.items}
      formik={formik}
      labelStyle={style.labelStyle}
      selectStyle={style.selectStyle}
    />
  );
};

const ServiceTextField = ({ item, formik, style, textAreaProps }: any) => {
  const { touched, errors } = formik;
  const isTextarea = item.type === MAPPED_FIELD_TYPES.textarea;
  const isPercentage = item.name === "service-tax";
  const isError = touched[item.name] && Boolean(errors[item.name]);
  const textAreaRows = isTextarea ? textAreaProps?.rows || 6 : undefined;
  // add "*" to label for required fields
  const label = `${item.label}${item.isRequired ? "*" : ""}`;
  return (
    <TextField
      // required={item.isRequired}
      onChange={formik.handleChange}
      id={item.name}
      name={item.name}
      type={item.type}
      label={label}
      placeholder={item.placeholder}
      value={formik.values[item.name]}
      autoComplete="off"
      fullWidth
      multiline={isTextarea}
      rows={textAreaRows}
      inputProps={{
        min: 0,
        max: isPercentage ? 100 : undefined,
      }}
      InputLabelProps={{
        error: isError,
        color: isError ? "error" : "primary",
      }}
      // TODO: implement validation
      helperText={isError ? errors[item.name] : ""}
      error={isError}
      sx={[
        style.itemStyle,
        style.itemSpacingStyle,
        style?.serviceTextFieldStyle,
        {
          color: isError && style.errorColor,
        },
        isError && style.errorHoverColor,
      ]}
    />
  );
};

const styles = (theme: Theme) => {
  return {
    outerContainer: {
      width: "100%",
      maxWidth: 800,
      marginTop: 3,
      boxShadow: "none",
    },
    innerContainer: {
      padding: 4,
      [theme.breakpoints.down("laptop")]: {
        flexWrap: "wrap",
      },
    },
    leftCardContainer: {
      width: "100%",
      maxWidth: 200,
      [theme.breakpoints.down("tablet")]: {
        maxWidth: "100%",
      },
    },
    rightCardContainer: {
      flexGrow: 1,
      minWidth: 400,
    },
    itemSpacingStyle: {
      marginTop: 4,
    },
    itemStyle: {
      "& .MuiInputLabel-root": {
        color: theme.palette.grey.A400,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.primary.main,
      },
    },
    labelStyle: {
      "& .MuiInputLabel-root": {
        color: theme.palette.grey.A400,
      },
      // "& .MuiInputLabel-root.Mui-focused": {
      //   color: theme.palette.primary.main,
      // },
    },
    selectStyle: {
      "& .MuiSelect-icon": {
        fill: theme.palette.grey.A400,
      },
      "&.Mui-focused .MuiSelect-icon": {
        fill: theme.palette.primary.main,
      },
    },
    subtitle: {
      width: "80%",
      paddingTop: 4,
      color: theme.palette.text.secondary,
    },
    checkboxLabel: {
      marginTop: 4,
    },
    checkboxLabelTypography: {
      fontSize: 16,
    },
    errorColor: {
      color: theme.palette.error.dark,
    },
    errorHoverColor: {
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.error.dark,
      },
    },
  };
};
