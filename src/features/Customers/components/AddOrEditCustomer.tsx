import React from "react";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { FORM_METHODS } from "@constants/constants";
import { NEW_CUSTOMER_INITIAL_VALUE } from "../constants/constants";
import { ActionButtons } from "@components/ActionButtons";
import { ServiceCard } from "@features/Services/components/ServiceCard";
import { newCustomerFields } from "../constants/customerFields";
import { customerSchema } from "../helpers/customerSchema";
import { ServiceCompProps } from "@features/Services/types/ServiceTypes";

const CONTENT = {
  NEW_CUSTOMER: "Add a New Customer",
  EDIT_CUSTOMER: "Edit Customer",
};

export const AddOrEditCustomer = ({
  primaryButtonText,
  secondaryButtonText,
  deleteButtonText,
  tableData,
  shouldEdit = false,
  isNew,
  existingItemData = {},
  onClickSecondary,
  handleDelete,
  addNewItem,
  editItem,
}: ServiceCompProps) => {
  const style = styles();

  const formik = useFormik({
    initialValues: !shouldEdit ? NEW_CUSTOMER_INITIAL_VALUE : existingItemData,
    validationSchema: customerSchema,
    onSubmit: (newCustomerData: any) => {
      // TODO: add implementation and test after BE implementation
      if (shouldEdit && editItem) {
        editItem(newCustomerData);
      }
      if (!shouldEdit && addNewItem) {
        tableData && addNewItem(tableData.concat(newCustomerData));
      }
    },
  });

  const title = isNew ? CONTENT.NEW_CUSTOMER : CONTENT.EDIT_CUSTOMER;

  return (
    <BoxFlex column style={style.container}>
      <Typography
        variant="h1"
        style={{ ...style.title, ...style.innerContainer }}
      >
        {title}
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        method={!shouldEdit ? FORM_METHODS.POST : FORM_METHODS.PATCH}
        style={style.innerContainer}
      >
        <>
          {newCustomerFields.map((item: any) => {
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
    </BoxFlex>
  );
};

const styles = () => {
  return {
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
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
