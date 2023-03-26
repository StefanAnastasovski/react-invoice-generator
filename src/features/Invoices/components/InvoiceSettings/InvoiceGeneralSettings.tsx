import React, { useState } from "react";
import { Typography } from "@mui/material";
import { ServiceCard } from "@features/Services/components/ServiceCard";
import { useFormik } from "formik";
import {
  invoiceGeneralSettingsFields,
  INVOICE_SETTINGS_INITIAL_VALUE,
} from "@features/Invoices/constants/invoiceGeneralSettingsFields";
import { ActionButtons } from "@components/ActionButtons";
import { BoxDiv } from "@components/atoms";
import { joinStyles } from "@utils/styleUtils";
import { invoiceGeneralSettingsSchema } from "@features/Invoices/helpers/invoiceGeneralSettingsSchema";
import { updateBooleanArray } from "@utils/commonUtils";
import { InvoiceDetails } from "./InvoiceDetails";
import { FORM_METHODS } from "@constants/constants";

const CONTENT = {
  NEW_INVOICE_SETTINGS: "Add Invoice Settings",
  EDIT_INVOICE_SETTINGS: "Edit Invoice Settings",
};

const NUMBER_OF_FIELDS = invoiceGeneralSettingsFields.length;

export const InvoiceGeneralSettings = ({
  primaryButtonText,
  secondaryButtonText,
  shouldEdit,
  existingItemData,
  onClickSecondary,
}: any) => {
  const style = styles();
  const title = !shouldEdit
    ? CONTENT.NEW_INVOICE_SETTINGS
    : CONTENT.EDIT_INVOICE_SETTINGS;

  // state to keep which card is editable
  const [isEditEnabled, setIsEditEnabled] = useState(
    Array(NUMBER_OF_FIELDS).fill(false)
  );

  const formik = useFormik({
    // TODO: remove after testing (BE)
    initialValues: !shouldEdit
      ? INVOICE_SETTINGS_INITIAL_VALUE
      : existingItemData,
    validationSchema: invoiceGeneralSettingsSchema,
    onSubmit: (invoiceGeneralSettings: any) => {
      // TODO: FIX => REMOVE THIS after testing
      // Use to close editable card
      console.log(invoiceGeneralSettings);
      setIsEditEnabled(Array(NUMBER_OF_FIELDS).fill(false));

      // TODO: add implementation and test after BE implementation
    },
  });

  const handleIsEditEnabled = (index: number) => {
    updateBooleanArray(isEditEnabled, index, setIsEditEnabled);
  };

  return (
    <>
      {!shouldEdit ? (
        <>
          <Typography
            variant="h1"
            style={joinStyles([style.title, style.innerContainer])}
          >
            {title}
          </Typography>
          {/* TODO: refactor service card */}
          <form
            onSubmit={formik.handleSubmit}
            method={FORM_METHODS.POST}
            style={style.innerContainer}
          >
            <>
              {/* TODO: refactor service card */}
              {/* TODO: add Authorised Sign => Default Digital Signatory => Image => upload file png file with your signature*/}
              {invoiceGeneralSettingsFields.map((item) => {
                return (
                  <ServiceCard
                    key={item.id}
                    title={item.title}
                    serviceData={item.items ?? item.items}
                    formik={formik}
                  />
                );
              })}

              <BoxDiv style={style.buttonContainer}>
                {/* TODO:  Change values */}
                <ActionButtons
                  primaryButtonText={primaryButtonText}
                  secondaryButtonText={secondaryButtonText}
                  onClickSecondary={onClickSecondary}
                />
              </BoxDiv>
            </>
          </form>
        </>
      ) : (
        // Render Saved Invoice Details
        <>
          {Boolean(existingItemData) &&
            invoiceGeneralSettingsFields.map((item, index) => {
              return (
                <InvoiceDetails
                  key={item.id}
                  title={item.title}
                  invoiceDetailsFields={item.items}
                  invoiceDetailsData={existingItemData}
                  canBeEdit={isEditEnabled[index]}
                  handleIsEditEnabled={handleIsEditEnabled.bind(null, index)}
                  formik={formik}
                />
              );
            })}
        </>
      )}
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
  };
};
