import React from "react";
import { Modal } from "@mui/material";
import { CustomMuiModalProps } from "types/components/ModalProps";
import { BoxDiv } from "@components/atoms";
import { joinStyles } from "@utils/styleUtils";

const ARIA_LABEL = {
  LABELLEDBY: "transition-moda-title",
  DESCRIBEDBY: "transition-modal-description",
};

export const CustomMuiModal = ({
  children,
  isModalOpen,
  modalStyle,
  containerStyle,
  ariaLabels,
  setIsModalOpen,
}: CustomMuiModalProps) => {
  const style = styles();

  const handleOnCloseModal = () => {
    setIsModalOpen && setIsModalOpen(false);
  };
  return (
    <Modal
      aria-labelledby={ariaLabels?.LABELLEDBY || ARIA_LABEL.LABELLEDBY}
      aria-describedby={ariaLabels?.DESCRIBEDBY || ARIA_LABEL.DESCRIBEDBY}
      open={isModalOpen}
      onClose={handleOnCloseModal}
      closeAfterTransition
      sx={modalStyle}
    >
      <BoxDiv style={joinStyles([style.container, containerStyle])}>
        {children}
      </BoxDiv>
    </Modal>
  );
};

const styles = () => {
  return {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 500,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
    },
  };
};
