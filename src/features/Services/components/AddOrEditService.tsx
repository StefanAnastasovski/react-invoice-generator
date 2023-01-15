import React from "react";
import { Typography } from "@mui/material";
import { useFormik } from "formik";
import { ServiceCard } from "./ServiceCard";
import { CustomButton } from "@components/atoms/Buttons";
import { useCommonStyles } from "@hooks/useCommonStyles";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { FORM_METHODS } from "@constants/constants";
import { serviceFields } from "../constants/serviceFields";
import { NEW_SERVICE_INITIAL_VALUE } from "../constants/constants";
import { serviceSchema } from "../helpers/serviceSchema";
import { NewServiceCompProps } from "../types/ServiceProps";

const CONTENT = {
  NEW_SERVICE: "Create a New Service",
  EDIT_SERVICE: "Edit Service",
};

export const AddOrEditService = ({
  primaryButtonText,
  secondaryButtonText,
  deleteButtonText,
  serviceList,
  shouldEdit = false,
  isNew,
  serviceData = {},
  onClickSecondary,
  handleDelete,
  addNewService,
  editService,
}: NewServiceCompProps) => {
  const { buttonStyle } = useCommonStyles();
  const style = styles();

  const formik = useFormik({
    initialValues: !shouldEdit ? NEW_SERVICE_INITIAL_VALUE : serviceData,
    validationSchema: serviceSchema,
    onSubmit: (newServiceData: any) => {
      // TODO: add implementation and test after BE implementation
      console.log(newServiceData);
      if (shouldEdit && editService) {
        editService(newServiceData);
      }
      if (!shouldEdit && addNewService) {
        serviceList && addNewService(serviceList.concat(newServiceData));
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
              <ServiceCard
                key={item.id}
                title={item.title}
                subtitle={item?.subtitle ?? item?.subtitle}
                serviceData={item.items ?? item.items}
                formik={formik}
              />
            );
          })}

          <BoxDiv style={style.buttonContainer}>
            <CustomButton
              size="large"
              type="submit"
              style={buttonStyle.primaryButton}
              onHoverStyle={buttonStyle.primaryButtonOnHover}
            >
              {primaryButtonText}
            </CustomButton>
            <CustomButton
              isPrimary={false}
              size="large"
              style={buttonStyle.secondaryButton}
              onHoverStyle={buttonStyle.secondaryButtonOnHover}
              onClick={onClickSecondary}
            >
              {secondaryButtonText}
            </CustomButton>
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
