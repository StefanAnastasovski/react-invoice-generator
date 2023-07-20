import React from "react";
import { Typography } from "@mui/material";
import { HStack } from "@components/atoms/Stack";
import { StyleCustomProps } from "types/StyleProps";
import { ReusableEditButton } from "@components/ReusableButtons";
import { toInteger } from "lodash";

type SummaryItemWrapperProps = {
  title: string;
  value: number;
  style: StyleCustomProps;
  isEditEnabled?: boolean;
  handleEdit?: () => void;
};

export const SummaryItemWrapper = ({
  style,
  title,
  value,
  isEditEnabled = false,
  handleEdit,
}: SummaryItemWrapperProps) => {
  const { textStyle, summaryItemContainer } = style;

  const titleComponent = (
    <Typography style={textStyle}>{`${title}:`}</Typography>
  );

  const valueWithTwoDecimals = value
    ? value.toFixed(2)
    : toInteger(0).toFixed(2);

  return (
    <HStack style={summaryItemContainer}>
      {!isEditEnabled ? (
        titleComponent
      ) : (
        <ItemWithReusableEditButton
          titleComponent={titleComponent}
          handleEdit={handleEdit}
        />
      )}

      <Typography style={textStyle}>{`$${valueWithTwoDecimals}`}</Typography>
    </HStack>
  );
};

const ItemWithReusableEditButton = ({ titleComponent, handleEdit }: any) => {
  return (
    <HStack>
      {titleComponent}
      <ReusableEditButton handleEdit={handleEdit} />
    </HStack>
  );
};
