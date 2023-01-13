import React from "react";
import { Typography } from "@mui/material";
import { FormikValues, useFormik } from "formik";
import { ServiceCard } from "./ServiceCard";
import { CustomButton } from "@components/atoms/Buttons";
import { useCommonStyles } from "@hooks/useCommonStyles";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { CONTENT_BUTTON_ACTIONS, FORM_METHODS } from "@constants/constants";
import { serviceFields } from "../constants/serviceFields";
import { NEW_SERVICE_INITIAL_VALUE } from "../constants/constants";
import { serviceSchema } from "../helpers/serviceSchema";
import { NewServiceCompProps } from "../types/ServiceProps";

const CONTENT = {
  NEW_SERVICE_TITLE: "Create a new service",
};

export const AddOrEditService = ({
  primaryButtonText,
  secondaryButtonText,
  deleteButtonText,
  shouldEdit = false,
  onClickSecondary,
  editService,
  addNewService,
  serviceData,
  handleDelete,
  serviceList,
}: NewServiceCompProps) => {
  const { buttonStyle } = useCommonStyles();
  const style = styles();

  const formik = useFormik({
    initialValues: !shouldEdit ? NEW_SERVICE_INITIAL_VALUE : serviceData,
    validationSchema: serviceSchema,
    onSubmit: (newServiceData) => {
      // TODO: add implementation and test after BE implementation
      console.log(newServiceData);
    },
  });

  return (
    <BoxFlex column style={style.container}>
      <Typography
        variant="h1"
        style={{ ...style.title, ...style.innerContainer }}
      >
        {CONTENT.NEW_SERVICE_TITLE}
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
