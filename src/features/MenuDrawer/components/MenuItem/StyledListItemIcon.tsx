import { ListItemIcon, styled } from "@mui/material";
import { OpenProps } from "types/OpenProps";

export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (props) => props !== "isOpen",
})<OpenProps>(({ isOpen }) => ({
  minWidth: 0,
  marginRight: isOpen ? "0.5rem" : "auto",
  justifyContent: "center",
}));
