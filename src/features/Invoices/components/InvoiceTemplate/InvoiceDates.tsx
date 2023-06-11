import React from "react";
import { Theme, Tooltip, Typography } from "@mui/material";
import { HStack } from "@components/atoms/Stack";
import { useCommonStyles } from "@hooks/index";
import { joinStyles } from "@utils/styleUtils";
import { invoiceDetails } from "@features/Invoices/constants/invoiceTemplate";
import { opacityHexSuffix } from "@constants/opacityHexConstants";
import { ReusableEditButton } from "@components/ReusableButtons";
import { ReusableDatePicker } from "@components/ReusableDatePicker/ReusableDatePicker";
import { useInvoiceDatePicker } from "@features/Invoices/hooks";
import { getMaxDate, getMinDate } from "@utils/datePickerUtils";
import {
  ErrorItemProps,
  ErrorMessageProps,
  ReusableDatePickerProps,
} from "types/components/DateProps";
import { DATE_PICKER_FORMAT } from "@constants/date";
import { HelpCenterOutlined as HelpIcon } from "@mui/icons-material";
import { BoxFlex } from "@components/atoms";

export const InvoiceDates = () => {
  const {
    invoiceDates: { issueDate, dueDate },
    invoicePO,
  } = invoiceDetails;
  const { titleStyle, valueStyle, style } = getStyles(useCommonStyles({}));

  const {
    issueDateValue,
    dueDateValue,
    canEditIssueDate,
    canEditDueDate,
    error: { issueDate: issueDateError, dueDate: dueDateError },
    handleEditIssueDate,
    handleEditDueDate,
    handleIssueDate,
    handleDueDate,
  } = useInvoiceDatePicker();

  const formattedIssueDate = issueDateValue.format("Do MMM YYYY");
  const formattedDueDate = dueDateValue.format("Do MMM YYYY");

  const datePickerItems = {
    issueDate: {
      label: "Issue Date",
      value: issueDateValue,
      format: DATE_PICKER_FORMAT,
      minDate: getMinDate(1, "year"),
      maxDate: getMaxDate(1, "year"),
      onChange: handleIssueDate,
      style: undefined,
      showConfirmButton: true,
    } as ReusableDatePickerProps,
    dueDate: {
      label: "Due Date",
      value: dueDateValue,
      format: DATE_PICKER_FORMAT,
      minDate: getMinDate(1, "year"),
      maxDate: getMaxDate(1, "year"),
      onChange: handleDueDate,
      style: undefined,
      showConfirmButton: true,
    } as ReusableDatePickerProps,
  };

  return (
    <BoxFlex column style={style.outerContainer}>
      <HStack style={style.container}>
        {/* Issue Date */}
        {canEditIssueDate ? (
          <BoxFlex column style={style.datePickerContainer}>
            {/* Issue Date Picker */}
            <ReusableDatePicker {...datePickerItems.issueDate} />
            {/* ERROR MESSAGE */}
            <ErrorMessage
              error={issueDateError as ErrorItemProps}
              style={style}
            />
          </BoxFlex>
        ) : (
          <HStack>
            <Typography style={titleStyle}>{issueDate.title}</Typography>
            <Typography style={valueStyle}>
              {formattedIssueDate || issueDate.value}
            </Typography>
            <ReusableEditButton
              handleEdit={handleEditIssueDate}
              style={style}
            />
          </HStack>
        )}

        {/* Due Date */}
        {canEditDueDate ? (
          <BoxFlex column style={style.datePickerContainer}>
            {/* Due Date Picker */}
            <ReusableDatePicker {...datePickerItems.dueDate} />
            {/* ERROR MESSAGE */}
            <ErrorMessage
              error={dueDateError as ErrorItemProps}
              style={style}
            />
          </BoxFlex>
        ) : (
          <HStack>
            <Typography style={titleStyle}>{dueDate.title}</Typography>
            <Typography style={valueStyle}>
              {formattedDueDate || dueDate.value}
            </Typography>
            <ReusableEditButton handleEdit={handleEditDueDate} style={style} />
          </HStack>
        )}

        {/* Invoice Number */}
        <HStack>
          <Typography style={titleStyle}>{invoicePO.title}</Typography>
          <Typography style={valueStyle}>{invoicePO.value}</Typography>
        </HStack>
      </HStack>
    </BoxFlex>
  );
};

const ErrorMessage = ({ error, style }: ErrorMessageProps) => {
  return (
    <>
      {error?.isError && (
        <BoxFlex style={style?.errorContainer}>
          <Typography style={style?.errorMessage}>
            {error.message ?? "You selected invalid date."}
          </Typography>
          <Tooltip title={error?.helperText ?? "Select valid date."}>
            <HelpIcon sx={style?.errorHelperText} />
          </Tooltip>
        </BoxFlex>
      )}
    </>
  );
};

const styles = (theme: Theme) => {
  const backgroundColor = `${theme.palette.text.secondary}${opacityHexSuffix[40]}`;
  const priDarkColor = theme.palette.primary.dark;
  const secDarkColor = theme.palette.secondary.dark;
  return {
    datePickerContainer: {
      position: "relative",
    },
    outerContainer: {
      backgroundColor: backgroundColor,
      margin: "20px 0",
      padding: "0 24px",
      borderRadius: "5px",
      height: "115px",
      justifyContent: "center",
    },
    container: {
      justifyContent: "space-between",
      alignItems: "baseline",
    },
    textColor: {
      color: theme.palette.common.white,
    },
    itemStyle: {
      paddingRight: "4px",
    },
    // Override EditButtonStyle
    editIcon: {
      width: 20,
      height: 20,
    },
    editIconButton: {
      color: priDarkColor,
      border: `1px solid ${priDarkColor}`,
      "&:hover": {
        color: secDarkColor,
        borderColor: secDarkColor,
      },
    },
    editIconButtonPosition: {
      left: 10,
      top: -10,
    },
    errorContainer: {
      position: "absolute",
      top: "40px",
    },
    errorMessage: {
      fontSize: 12,
      alignSelf: "flex-end",
      color: "red", // TODO: change color
    },
    errorHelperText: {
      width: 20,
      height: 20,
      color: "red", // TODO: change color
    },
  };
};

const getStyles = (commonStyles: any) => {
  const { textStyle, theme } = commonStyles;
  const style = styles(theme);
  const {
    text: {
      fontSize,
      fontWeight: { bold },
      color: { textBlack },
    },
  } = textStyle;

  const titleStyle = joinStyles([
    fontSize.text,
    bold,
    style.itemStyle,
    style.textColor,
    textBlack,
  ]);
  const valueStyle = joinStyles([
    fontSize.text,
    bold,
    style.textColor,
    textBlack,
  ]);
  return {
    style,
    titleStyle,
    valueStyle,
  };
};
