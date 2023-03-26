import React, { useState } from "react";
import { useFormik } from "formik";
import { Typography } from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import { ServiceCard } from "@features/Services/components/ServiceCard";
import { ActionButtons } from "@components/ActionButtons";
import { BoxDiv } from "@components/atoms";
import {
  invoiceTaxSettingsFields,
  INVOICE_TAX_SETTINGS_INITIAL_VALUE,
} from "@features/Invoices/constants/invoiceTaxSettingsFields";
import { invoiceTaxSettingsSchema } from "@features/Invoices/helpers/invoiceTaxSettingsSchema";
import { updateBooleanArray } from "@utils/commonUtils";
import { InvoiceDetails } from "./InvoiceDetails";
import { FORM_METHODS } from "@constants/constants";

const CONTENT = {
  ADD_TAX_DETAILS: "Add Tax Details",
  EDIT_TAX_DETAILS: "Edit Tax Details",
};

const NUMBER_OF_FIELDS = invoiceTaxSettingsFields.length;

export const InvoiceTaxSettings = ({
  primaryButtonText,
  secondaryButtonText,
  shouldEdit,
  existingItemData,
  onClickSecondary,
}: any) => {
  const style = styles();
  const title = !shouldEdit
    ? CONTENT.ADD_TAX_DETAILS
    : CONTENT.EDIT_TAX_DETAILS;

  // state to keep which card is editable
  const [isEditEnabled, setIsEditEnabled] = useState<boolean[]>(
    Array(NUMBER_OF_FIELDS).fill(false)
  );

  const formik = useFormik({
    initialValues: !shouldEdit
      ? INVOICE_TAX_SETTINGS_INITIAL_VALUE
      : existingItemData,
    validationSchema: invoiceTaxSettingsSchema,
    onSubmit: (invoiceTaxSettings: any) => {
      console.log(invoiceTaxSettings);
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
            <form
              onSubmit={formik.handleSubmit}
              method={FORM_METHODS.POST}
              style={style.innerContainer}
            >
              <>
                {/* TODO: refactor service card */}
                {invoiceTaxSettingsFields.map((item) => {
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
                  <ActionButtons
                    primaryButtonText={primaryButtonText}
                    secondaryButtonText={secondaryButtonText}
                    onClickSecondary={onClickSecondary}
                  />
                </BoxDiv>
              </>
            </form>
          </Typography>
        </>
      ) : (
        // Render Saved Invoice Details
        <>
          {Boolean(existingItemData) &&
            invoiceTaxSettingsFields.map((item, index) => {
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
