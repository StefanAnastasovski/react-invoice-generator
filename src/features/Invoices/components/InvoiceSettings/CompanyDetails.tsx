import React, { useState } from "react";
import { Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { ActionButtons } from "@components/ActionButtons";
import { ServiceCard } from "@features/Services/components/ServiceCard";
import { invoiceCompanyFields } from "@features/Invoices/constants/invoiceFields";
import { useFormik } from "formik";
import { FORM_METHODS } from "@constants/constants";
import { NEW_COMPANY_DETAILS_INITIAL_VALUE } from "@features/Invoices/constants/constants";
import { invoiceSchema } from "@features/Invoices/helpers/invoiceSchema";
import { joinStyles } from "@utils/styleUtils";
import { InvoiceDetails } from "./InvoiceDetails";
import { updateBooleanArray } from "@utils/commonUtils";

const CONTENT = {
  ADD_COMPANY_DETAILS: "Add Company Details",
  EDIT_COMPANY_DETAILS: "Edit Company Details",
};
// Building your Invoicing

const NUMBER_OF_FIELDS = invoiceCompanyFields.length;

export const CompanyDetails = ({
  primaryButtonText,
  secondaryButtonText,
  shouldEdit,
  existingItemData,
  onClickSecondary,
}: any) => {
  const style = styles();
  const title = !shouldEdit
    ? CONTENT.ADD_COMPANY_DETAILS
    : CONTENT.EDIT_COMPANY_DETAILS;

  // state to keep which card is editable
  const [isEditEnabled, setIsEditEnabled] = useState(
    Array(NUMBER_OF_FIELDS).fill(false)
  );

  const formik = useFormik({
    initialValues: !shouldEdit
      ? NEW_COMPANY_DETAILS_INITIAL_VALUE
      : existingItemData,
    validationSchema: invoiceSchema,
    onSubmit: (companyDetails: any) => {
      // TODO: FIX => REMOVE THIS after testing
      // Use to close editable card
      console.log(companyDetails);
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
          <form
            onSubmit={formik.handleSubmit}
            method={FORM_METHODS.POST}
            style={style.innerContainer}
          >
            <>
              {/* TODO: refactor service card */}
              {invoiceCompanyFields.map((item) => {
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
        </>
      ) : (
        // Render Saved Invoice Details
        <>
          {Boolean(existingItemData) &&
            invoiceCompanyFields.map((item, index) => {
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
