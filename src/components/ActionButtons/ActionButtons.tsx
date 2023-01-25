import React from "react";
import { CustomButton } from "@components/atoms/Buttons";
import { useCommonStyles } from "@hooks/index";

export const ActionButtons = ({
  primaryButtonText,
  secondaryButtonText,
  onClickSecondary,
}: {
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onClickSecondary?: () => void;
}) => {
  const { buttonStyle } = useCommonStyles({});

  return (
    <>
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
    </>
  );
};
