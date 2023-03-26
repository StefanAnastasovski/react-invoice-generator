import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import {
  invoiceNoteFields,
  INVOICE_NOTES_INITIAL_VALUE,
} from "@features/Invoices/constants/invoiceNotesFields";
import { ServiceCard } from "@features/Services/components/ServiceCard";
import { ActionButtons } from "@components/ActionButtons";
import { InvoiceNotesList } from "./InvoiceNotesList";
import { tableConfig } from "@config/tableConfig";
import { invoiceNotesSchema } from "@features/Invoices/helpers/invoiceNotesSchema";

const CONTENT = {
  NEW_INVOICE_NOTE: "Add a New Invoice Note",
  EDIT_INVOICE_NOTE: "Edit Invoice Note",
};

type NoteProps = {
  id: string;
  "note-id": number;
  note: string;
};

const EDIT_INITIAL_VALUES = {
  isEdit: false,
  editItem: null,
};

export const InvoiceNotes = ({
  shouldEdit,
  primaryButtonText,
  secondaryButtonText,
}: any) => {
  const style = styles();
  const title = !shouldEdit
    ? CONTENT.NEW_INVOICE_NOTE
    : CONTENT.EDIT_INVOICE_NOTE;

  // TODO: remove after testing
  const [data, setData] = useState<NoteProps[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(EDIT_INITIAL_VALUES.isEdit);
  const [editItem, setEditItem] = useState<any>(EDIT_INITIAL_VALUES.editItem);

  const formik = useFormik({
    initialValues: INVOICE_NOTES_INITIAL_VALUE,
    validationSchema: invoiceNotesSchema,
    onSubmit: (invoiceNotes: any) => {
      console.log(invoiceNotes);
      let tempData = [...data];
      if (isEdit) {
        const searchElementIndex = tempData.indexOf(editItem);
        tempData[searchElementIndex] = {
          ...tempData[searchElementIndex],
          note: invoiceNotes["invoice-note"],
        };
        setData(tempData);
        // set default values and reset form
        setIsEdit(EDIT_INITIAL_VALUES.isEdit);
        setEditItem(EDIT_INITIAL_VALUES.editItem);
        handleResetForm();
      } else {
        // TODO: remove after testing
        tempData.push({
          id: `note-${data.length + 1}`,
          "note-id": data.length + 1,
          note: invoiceNotes["invoice-note"],
        });
        setData(tempData);
      }
    },
  });

  const handleResetForm = () => {
    formik.resetForm();
  };

  const {
    invoiceNotes: { pageTitle },
    invoiceNotes: config,
  } = tableConfig;

  useEffect(() => {
    setData(config?.tableData as any);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCustomEdit = (index: any) => {
    const value = data.filter((item) => item.id === index);
    setIsEdit(true);
    setEditItem(value[0]);
    formik.setFieldValue("invoice-note", value[0]?.note);
  };

  return (
    <>
      <Typography
        variant="h1"
        style={joinStyles([style.title, style.innerContainer])}
      >
        {title}
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        // method={!shouldEdit ? FORM_METHODS.POST : FORM_METHODS.PATCH}
        style={joinStyles([style.innerContainer, style.innerContainerStyle])}
      >
        {invoiceNoteFields.map((item) => {
          return (
            <ServiceCard
              key={item.id}
              title={item?.title}
              serviceData={item.items ?? item.items}
              formik={formik}
              buttonComponent={
                <ActionButtons
                  primaryButtonText={primaryButtonText}
                  secondaryButtonText={secondaryButtonText}
                  // TODO: add navigation
                  onClickSecondary={handleResetForm}
                />
              }
              customStyle={{
                serviceTextFieldStyle: style.serviceTextFieldStyle,
                innerContainerStyle: style.innerContainerStyle,
                outerContainerStyle: style.outerContainerStyle,
                buttonContainerStyle: style.buttonContainerStyle,
              }}
              textAreaProps={{
                rows: 2,
              }}
            />
          );
        })}
      </form>

      <InvoiceNotesList
        pageTitle={pageTitle}
        config={config}
        // TODO: remove after testing
        data={data}
        setData={setData}
        // TODO: work with real data
        handleCustomEdit={handleCustomEdit}
      />
    </>
  );
};

const styles = () => {
  return {
    innerContainer: {
      width: "100%",
      maxWidth: 800,
    },
    buttonContainer: { paddingY: 5 },
    title: {
      fontSize: "2.5em",
    },
    serviceTextFieldStyle: {
      marginTop: 0,
    },
    innerContainerStyle: {
      padding: 0,
      paddingBottom: 4,
    },
    outerContainerStyle: {
      maxWidth: 1000,
    },
    buttonContainerStyle: {
      textAlign: "right",
    },
  };
};
