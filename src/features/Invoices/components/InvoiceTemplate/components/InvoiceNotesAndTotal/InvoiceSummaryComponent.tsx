import React from "react";
import { Theme, Typography } from "@mui/material";
import { BoxDiv } from "@components/atoms";
import { HStack } from "@components/atoms/Stack";
import { ReusableTextField } from "@components/ReusableTextField";
import { joinStyles, setTextFieldItemColorStyle } from "@utils/styleUtils";

const TAX_NUMBER_FIELD = {
  id: "taxable",
  name: "taxable",
  type: "number",
  label: "Taxable",
  placeholder: "Enter a Tax 0 - 100 (%)",
  isIcon: true,
  min: 0,
  max: 100,
};

export const InvoiceSummaryComponent = ({ summary, style }: any) => {
  const { summaryTotalContainer, summaryTotalStyle, ...itemStyles } =
    getStyles(style);

  return (
    <>
      {/* Summary Items */}
      <RenderSummaryItems summaryItems={summary?.items} style={itemStyles} />

      {/* Total Amount */}
      <HStack style={summaryTotalContainer}>
        <Typography
          style={summaryTotalStyle}
        >{`${summary?.total.title}:`}</Typography>
        <Typography
          style={summaryTotalStyle}
        >{`$${summary?.total.value}`}</Typography>
      </HStack>
    </>
  );
};

const RenderSummaryItems = ({ summaryItems, style }: any) => {
  const {
    textStyle,
    summaryContainer,
    summaryItemContainer,
    ...textFieldStyle
  } = style;

  const handleAddTax = () => {
    // TODO: add logic
    console.log("add tax number");
  };

  return (
    <BoxDiv style={summaryContainer}>
      {summaryItems.map((item: any) => {
        const isTaxable = item.title === "Taxable";
        const titleComponent = (
          <Typography
            style={{
              ...textStyle,
              ...{ alignSelf: "center", paddingRight: 8 },
            }}
          >{`${item.title}:`}</Typography>
        );
        const editableTitleComponent = isTaxable ? (
          <ReusableTextField
            item={TAX_NUMBER_FIELD}
            style={textFieldStyle}
            onClickIcon={handleAddTax}
          />
        ) : (
          titleComponent
        );
        return (
          <HStack key={item.id} style={summaryItemContainer}>
            {editableTitleComponent}
            <Typography style={textStyle}>{`$${item.value}`}</Typography>
          </HStack>
        );
      })}
    </BoxDiv>
  );
};

const getStyles = (compStyle: any) => {
  const { text, theme, borderColor } = compStyle;
  const { summaryTotal, ...restStyles } = styles(theme, borderColor);

  const {
    fontSize,
    color: { textBlack },
  } = text;

  const textStyle = joinStyles([fontSize.text, textBlack]);
  const summaryTotalStyle = joinStyles([summaryTotal, textBlack]);

  return {
    textStyle,
    summaryTotalStyle,
    ...restStyles,
  };
};

const styles = (theme: Theme, borderColor: string) => {
  const secDarkColor = theme.palette.secondary.dark;
  return {
    summaryContainer: {
      marginY: 2,
      padding: "0 16px",
      "& > div:not(:last-child)": {
        paddingBottom: 1,
      },
    },
    summaryItemContainer: {
      justifyContent: "space-between",
    },
    summaryTotalContainer: {
      justifyContent: "space-between",
      borderTop: `1px solid ${borderColor}`,
      paddingY: 1,
    },
    summaryTotal: {
      fontSize: "20px",
      paddingLeft: "16px",
      paddingRight: "16px",
    },
    inputLabelPropsStyle: {
      fontSize: 18,
      top: "-10px",
      color: secDarkColor,
      "&.MuiInputLabel-root.Mui-focused, &.MuiInputLabel-root.MuiFormLabel-filled":
        {
          top: 0,
          fontSize: 18,
        },
    },
    inputPropsStyle: {
      minWidth: 150,
      paddingY: 0.75,
      textAlign: "center",
      color: secDarkColor,
    },
    itemColorStyle: setTextFieldItemColorStyle({
      theme: theme,
      mainColor: secDarkColor,
      hoverColor: secDarkColor,
      focusedColor: secDarkColor,
    }),
    textfieldStyle: {
      maxWidth: "225px",
      "& ::placeholder": {
        fontSize: 14,
      },
    },
  };
};
