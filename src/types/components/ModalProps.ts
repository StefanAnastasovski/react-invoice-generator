import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

type ariaLabels = {
  LABELLEDBY?: string;
  DESCRIBEDBY?: string;
};

export interface ModalProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  showArrowTop?: boolean;
  containerStyle?: CSSProperties | SxProps;
}

export interface CustomMuiModalProps extends ModalProps {
  setIsModalOpen: (v?: boolean) => void;
  modalStyle?: CSSProperties | SxProps;
  ariaLabels?: ariaLabels;
}
