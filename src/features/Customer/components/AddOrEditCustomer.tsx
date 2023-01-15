import React, { useRef } from "react";
import { useFormik } from "formik";
import { Divider, TextField, Theme, Typography, useTheme } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { BasicCard } from "@components/atoms/Card/BasicCard";
import { HStack } from "@components/atoms/Stack";
import { CustomButton } from "@components/atoms/Buttons";
import { opacityHexSuffix } from "@constants/opacityHexConstants";
import { customerSchema } from "../helpers/customerSchema";
import { newCustomerFields } from "../constants/customerFields";
import { NEW_CUSTOMER_INITIAL_VALUE } from "../constants/constants";
import {
  NewCustomerCompProps,
  NewCustomerRenderFieldProps,
} from "../types/NewCustomerTypes";
import { FORM_METHODS } from "@constants/constants";
import { RouterLink } from "@components/atoms/Link/RouterLink";
import { customersRoutes } from "@features/Router/routes";

const CONTENT = {
  NEW_CUSTOMER: "Add a New Customer",
  EDIT_CUSTOMER: "Edit Customer",
};

const renderFields = ({
  formik,
  theme,
  style,
  inputRef,
}: NewCustomerRenderFieldProps) => {
  const { touched, errors } = formik;

  return newCustomerFields.map((item, index) => {
    const itemPadding =
      index % 2 !== 0 ? { paddingLeft: 2 } : { paddingRight: 2 };
    const isError = touched[item.name] && Boolean(errors[item.name]);
    return (
      <TextField
        inputRef={(el) => (inputRef.current[el?.name] = el)}
        key={item.id}
        // required={item.isRequired}
        onChange={formik.handleChange}
        id={item.name}
        name={item.name}
        type={item.type}
        label={item.label}
        value={formik.values[item.name]}
        placeholder={item.placeholder}
        autoComplete="off"
        helperText={isError ? errors[item.name] : ""}
        error={isError}
        sx={{
          ...itemPadding,
          ...style.itemStyle,
          "& .MuiInputLabel-root.Mui-focused": {
            color: isError
              ? theme.palette.error.dark
              : theme.palette.primary.main,
          },
        }}
      />
    );
  });
};

export const AddOrEditCustomer = ({
  primaryButtonText,
  secondaryButtonText,
  deleteButtonText,
  customerList,
  shouldEdit = false,
  isNew,
  customerData = {},
  onClickSecondary,
  handleDelete,
  addNewCustomer,
  editCustomer,
}: NewCustomerCompProps) => {
  const theme = useTheme();
  const inputRef = useRef<any>({});
  const style = styles(theme);

  const handleDeleteClick = () => {
    handleDelete && handleDelete(customerData.edb);
  };

  const formik = useFormik({
    initialValues: !shouldEdit ? NEW_CUSTOMER_INITIAL_VALUE : customerData,
    validationSchema: customerSchema,
    onSubmit: (newCustomerData: any) => {
      // TODO: add implementation and test after BE implementation
      if (shouldEdit && editCustomer) {
        editCustomer(newCustomerData);
      }
      if (!shouldEdit && addNewCustomer) {
        customerList && addNewCustomer(customerList.concat(newCustomerData));
      }
    },
  });
  const title = isNew ? CONTENT.NEW_CUSTOMER : CONTENT.EDIT_CUSTOMER;

  return (
    <BoxDiv>
      <BasicCard
        containerStyle={style.cardContainer}
        cardContent={
          <>
            <Typography variant="h5">{title}</Typography>

            <Divider sx={style.titleDivider} />
            {/* TODO: get the fileds from BE */}
            {isNew ||
            (shouldEdit && Boolean(Object.keys(customerData).length > 0)) ? (
              <form
                onSubmit={formik.handleSubmit}
                method={!shouldEdit ? FORM_METHODS.POST : FORM_METHODS.PATCH}
              >
                {renderFields({
                  formik,
                  theme,
                  style,
                  inputRef,
                })}

                <Divider sx={style.buttonDivider} />

                <HStack style={style.hStackContainer} spacing={3}>
                  <BoxDiv>
                    <CustomButton
                      isPrimary={true}
                      size="large"
                      type="submit"
                      style={style.primaryButton}
                      onHoverStyle={style.primaryButtonOnHover}
                    >
                      {primaryButtonText}
                    </CustomButton>
                    <CustomButton
                      isPrimary={false}
                      size="large"
                      style={style.secondaryButton}
                      onHoverStyle={style.secondaryButtonOnHover}
                      onClick={onClickSecondary}
                    >
                      {secondaryButtonText}
                    </CustomButton>
                  </BoxDiv>
                  {Boolean(deleteButtonText) && (
                    <CustomButton
                      isPrimary={false}
                      style={style.deleteButton}
                      onHoverStyle={style.deleteButtonOnHover}
                      onClick={handleDeleteClick}
                    >
                      {deleteButtonText}
                    </CustomButton>
                  )}
                </HStack>
              </form>
            ) : null}

            {!shouldEdit && !isNew && (
              <BoxDiv style={{ textAlign: "center" }}>
                <Typography variant="h1">404</Typography>
                <Typography>
                  Sorry, the customer was not found. Please, choose the existing
                  customer.
                </Typography>
                <RouterLink href={customersRoutes.list}>Go Back</RouterLink>
              </BoxDiv>
            )}
          </>
        }
      />
    </BoxDiv>
  );
};

const styles = (theme: Theme) => {
  const inactiveLabelColor = theme.palette.grey.A400;
  return {
    cardContainer: {
      maxWidth: 800,
      paddingTop: 3,
      paddingBottom: 3,
    },
    itemStyle: {
      minWidth: "50%",
      marginTop: 2,
      left: "unset !important",
      top: "unset !important",
      [theme.breakpoints.down("laptop")]: {
        paddingLeft: 0,
        paddingRight: 0,
        width: "100%",
      },
      [theme.breakpoints.up("laptop")]: {
        minWidth: "50%",
        maxWidth: "50%",
      },
      "& .MuiInputLabel-root": {
        left: "inherit",
        color: inactiveLabelColor,
      },
    },
    hStackContainer: {
      marginTop: 4,
      justifyContent: "space-between",
    },
    primaryButton: {
      paddingLeft: "5rem",
      paddingRight: "5rem",
      fontWeight: 800,
      letterSpacing: 0.5,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    primaryButtonOnHover: {
      backgroundColor: `${theme.palette.primary.main}${opacityHexSuffix[80]}`,
      borderColor: `${theme.palette.primary.main}${opacityHexSuffix[80]}`,
    },
    secondaryButton: {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white,
      letterSpacing: 0.5,
      marginLeft: 3,
    },
    secondaryButtonOnHover: {
      color: theme.palette.primary.main,
    },
    deleteButton: {
      color: theme.palette.error.main,
      borderColor: theme.palette.error.main,
      letterSpacing: 0.5,
    },
    deleteButtonOnHover: {
      color: theme.palette.error.dark,
      borderColor: theme.palette.error.dark,
    },
    titleDivider: { paddingBottom: 2, marginBottom: 4, width: "100%" },
    buttonDivider: { marginTop: 4, marginBottom: 4, width: "100%" },
  };
};