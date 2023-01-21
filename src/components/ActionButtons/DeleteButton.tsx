import React from "react";
import { CustomButton } from "@components/atoms/Buttons";
import { useCommonStyles } from "@hooks/useCommonStyles";

export const DeleteButton = ({
  deleteButtonText,
  handleDeleteClick,
}: {
  deleteButtonText?: string;
  handleDeleteClick?: () => void;
}) => {
  const { buttonStyle } = useCommonStyles();

  return (
    <>
      <CustomButton
        isPrimary={false}
        style={buttonStyle.deleteButton}
        onHoverStyle={buttonStyle.deleteButtonOnHover}
        onClick={handleDeleteClick}
      >
        {deleteButtonText}
      </CustomButton>
    </>
  );
};
