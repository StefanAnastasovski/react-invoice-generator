import React, { Fragment } from "react";
import { Box, IconButton, Theme, Typography, useTheme } from "@mui/material";
import { BasicCard, BoxDiv, BoxFlex, Paragraph } from "@components/atoms";
import { Edit as EditIcon } from "@mui/icons-material";
import { useCommonStyles } from "@hooks/index";
import { ActionButtons } from "@components/ActionButtons";
import {
  CONTENT_BUTTON_ACTIONS,
  FORM_METHODS,
  MAPPED_FIELD_TYPES,
} from "@constants/constants";
import { CustomCheckbox } from "@components/atoms/Checkbox";
import { CardCreateWrapper } from "@components/Cards";

export const InvoiceDetails = ({
  title,
  subtitle,
  invoiceDetailsData,
  invoiceDetailsFields,
  buttonComponent,
  canBeEdit,
  handleIsEditEnabled,
  formik,
}: any) => {
  const theme = useTheme();
  const style = styles(theme);
  const { tableStyle } = useCommonStyles({});

  return (
    <BasicCard
      key={title}
      containerStyle={style.outerContainer}
      cardContent={
        <>
          <BoxFlex style={style.innerContainer}>
            {/* Card Title */}
            {Boolean(title) && (
              <Typography variant="h6" style={style.title}>
                {title}
              </Typography>
            )}

            {/* Card Edit Button */}
            {!canBeEdit && (
              <IconButton
                onClick={handleIsEditEnabled}
                sx={[tableStyle.icons, style.editIconButton]}
              >
                <EditIcon style={style.editIcon} />
              </IconButton>
            )}
          </BoxFlex>

          {/* Card subtitle */}
          {Boolean(subtitle) && (
            <Paragraph style={style.subtitle}>{subtitle}</Paragraph>
          )}

          {/* Conditional rendering based on canBeEdit => render saved items or enable edit fields  */}
          {!canBeEdit ? (
            //   Render Items
            <BoxDiv style={style.itemContainer}>
              {invoiceDetailsFields &&
                renderItems({
                  invoiceDetailsData,
                  invoiceDetailsFields,
                  style,
                })}
            </BoxDiv>
          ) : (
            // Action Buttons inside card
            <BoxDiv>
              <form onSubmit={formik.handleSubmit} method={FORM_METHODS.PATCH}>
                <>
                  <CardCreateWrapper
                    serviceData={invoiceDetailsFields}
                    formik={formik}
                    customStyle={{
                      outerContainerStyle: style.outerContainerStyle,
                      innerContainerStyle: style.innerContainerStyle,
                      checkboxLabelTypographyStyle:
                        style.checkboxLabelTypography,
                      checkboxLabelStyle: style.checkboxLabel,
                    }}
                  />

                  <ActionButtons
                    primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
                    secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
                    onClickSecondary={handleIsEditEnabled}
                  />
                </>
              </form>
            </BoxDiv>
          )}
        </>
      }
    />
  );
};

const renderItems = ({
  invoiceDetailsData,
  invoiceDetailsFields,
  style,
}: any) =>
  invoiceDetailsFields.map((item: any) => {
    if (item.type === MAPPED_FIELD_TYPES.checkbox) {
      return (
        <CustomCheckbox
          key={item.id}
          item={item}
          isChecked={invoiceDetailsData[item.name]}
          disableRipple
          style={{
            checkboxLabelTypography: style.checkboxLabelTypography,
          }}
        />
      );
    }

    return (
      <Box key={item.id} style={style.item}>
        {/* Item Label */}
        <Paragraph bold style={style.itemLabel}>
          {item.label}:
        </Paragraph>
        {/* Item Text */}
        <Paragraph style={style.itemText}>
          {invoiceDetailsData[item.name]}
        </Paragraph>
      </Box>
    );
  });

const styles = (theme: Theme) => {
  return {
    outerContainer: {
      width: "100%",
      maxWidth: 800,
      marginTop: 3,
      boxShadow: "none",
    },
    innerContainer: {
      paddingX: 4,
      paddingTop: 2,
      justifyContent: "space-between",
    },
    itemContainer: {
      paddingX: 4,
      paddingTop: 2,
    },
    title: {
      color: theme.palette.common.white,
    },
    subtitle: {
      fontSize: 14,
      letterSpacing: 0.5,
      paddingX: 4,
    },
    item: {
      display: "flex",
      marginBottom: 8,
    },
    itemLabel: {
      display: "flex",
      width: 200,
      color: theme.palette.common.white,
    },
    itemText: {
      color: theme.palette.common.white,
      alignSelf: "center",
      paddingLeft: 2,
    },
    errorColor: {
      color: theme.palette.error.dark,
    },
    errorHoverColor: {
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.error.dark,
      },
    },
    editIcon: {
      width: 20,
      height: 20,
    },
    editIconButton: {
      borderRadius: "0",
      border: `1px solid ${theme.palette.common.white}`,
      "&:hover": { borderColor: theme.palette.primary.main },
      // change default ripple border radius
      "& .MuiTouchRipple-root .MuiTouchRipple-child": {
        borderRadius: "0px",
      },
    },
    checkboxLabel: {
      margin: 0,
    },
    checkboxLabelTypography: {
      fontSize: 16,
      letterSpacing: 0.25,
      color: theme.palette.common.white,
    },
    // customStyle for Service Card
    outerContainerStyle: {
      margin: 0,
    },
    innerContainerStyle: {
      padding: 0,
    },
  };
};
