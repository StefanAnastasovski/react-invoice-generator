import React from "react";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { FORM_METHODS } from "@constants/constants";
import { serviceFields } from "../constants/serviceFields";
import { NEW_SERVICE_INITIAL_VALUE } from "../constants/constants";
import { serviceSchema } from "../helpers/serviceSchema";
import { ServiceCompProps } from "../types/ServiceTypes";
import { ActionButtons } from "@components/ActionButtons";
import { CardCreateWrapper } from "@components/Cards";

const CONTENT = {
  NEW_SERVICE: "Create a New Service",
  EDIT_SERVICE: "Edit Service",
};

export const AddOrEditService = ({
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
    initialValues: !shouldEdit ? NEW_SERVICE_INITIAL_VALUE : existingItemData,
    validationSchema: serviceSchema,
    onSubmit: (newServiceData: any) => {
      // TODO: add implementation and test after BE implementation
      if (shouldEdit && editItem) {
        editItem(newServiceData);
      }
      if (!shouldEdit && addNewItem) {
        tableData && addNewItem(tableData.concat(newServiceData));
      }
    },
  });

  const title = isNew ? CONTENT.NEW_SERVICE : CONTENT.EDIT_SERVICE;

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
          {serviceFields.map((item) => {
            return (
              <CardCreateWrapper
                key={item.id}
                title={item.title}
                subtitle={item?.subtitle ?? item?.subtitle}
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
