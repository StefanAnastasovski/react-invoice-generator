import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Divider } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundImage: "none",
  },
  "& .MuiDialogContent-root": {
    marginTop: 10,
    width: "550px",
    padding: theme.spacing(2),
    color: theme.palette.primary.light,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(2),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export const CustomDialog = ({
  title,
  buttonText,
  isDialogOpen,
  handleClickOpen,
  handleClose,
  onClickAction,
  dialogChildren,
}: any) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isDialogOpen}
        sx={{ padding: 2 }}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {title || "Title"}
        </BootstrapDialogTitle>

        <Divider
          sx={{
            borderColor: (theme) => theme.palette.grey[400],
          }}
        />

        <DialogContent>{dialogChildren}</DialogContent>

        <Divider
          sx={{
            borderColor: (theme) => theme.palette.grey[400],
          }}
        />

        <DialogActions>
          <Button autoFocus onClick={onClickAction}>
            {buttonText || "Save Changes"}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};
