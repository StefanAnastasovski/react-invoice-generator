import React from "react";
import { TextField, Theme, Typography, useTheme } from "@mui/material";
import { BasicCard } from "@components/atoms/Card";
import { BoxDiv, BoxFlex } from "@components/atoms/Box";
import { CustomSelect } from "@components/atoms/Select";
import {
  CardContentProps,
  ServiceCardProps,
  ServiceItemsProps,
} from "../types/ServiceTypes";
import { DropzoneComponent } from "@components/Dropzone";
// import { SERVICE_FIELD_MAP } from "../constants/serviceTable";

const renderItems = ({ serviceData, formik, style }: ServiceItemsProps) => {
  const { touched, errors } = formik;

  return serviceData.map((item: any) => {
    const isTextarea = item.type === "textarea";
    const isPercentage = item.name === "service-tax";
    const isError = touched[item.name] && Boolean(errors[item.name]);
    // const fieldValue = formik.values[SERVICE_FIELD_MAP[item.name]] as string;

    return item.items ? (
      <CustomSelect
        key={item.id}
        label={item.label}
        selectId={item.name}
        selectName={item.name}
        value={formik.values[item.name] as string}
        itemList={item.items}
        formik={formik}
        labelStyle={style.labelStyle}
        selectStyle={style.selectStyle}
      />
    ) : (
      <TextField
        key={item.id}
        // required={item.isRequired}
        onChange={formik.handleChange}
        id={item.name}
        name={item.name}
        type={item.type}
        label={item.label}
        placeholder={item.placeholder}
        value={formik.values[item.name]}
        autoComplete="off"
        fullWidth
        multiline={isTextarea}
        rows={isTextarea ? 6 : undefined}
        inputProps={{
          min: 0,
          max: isPercentage ? 100 : undefined,
        }}
        // TODO: implement validation
        helperText={isError ? errors[item.name] : ""}
        error={isError}
        sx={[style.itemStyle, style.itemSpacingStyle]}
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
}: CardContentProps) => {
  const isServiceDataEmpty = Boolean(serviceData);
  const isImage = serviceData?.[0]?.name === "service-image";
  return (
    <BasicCard
      key={title}
      containerStyle={style.outerContainer}
      cardContent={
        <BoxFlex style={style.innerContainer}>
          <BoxDiv style={style.leftCardContainer}>
            <Typography variant="h6">{title}</Typography>
            {subtitle ?? (
              <Typography variant="subtitle2" style={style.subtitle}>
                {subtitle}
              </Typography>
            )}
          </BoxDiv>

          <BoxDiv style={style.rightCardContainer}>
            {isServiceDataEmpty && serviceData && !isImage ? (
              renderItems({ serviceData, formik, style })
            ) : (
              <DropzoneComponent formik={formik} name="service-image" />
            )}
          </BoxDiv>
        </BoxFlex>
      }
    />
  );
};

export const ServiceCard = (props: ServiceCardProps) => {
  const { title } = props;
  const theme = useTheme();
  const style = styles(theme);
  return (
    <BasicCard
      key={title}
      containerStyle={style.outerContainer}
      cardContent={<CardContent {...props} style={style} />}
    />
  );
};

const styles = (theme: Theme) => {
  return {
    outerContainer: {
      width: "100%",
      maxWidth: 800,
      marginTop: 3,
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
  };
};
