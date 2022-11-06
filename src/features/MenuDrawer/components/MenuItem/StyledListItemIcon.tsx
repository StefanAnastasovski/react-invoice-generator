import { ListItemIcon, styled } from "@mui/material";
import { OpenProps } from "types/OpenProps";


export const StyledListItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (props) => props !== "open",
})<OpenProps>(({ open }) => ({
  minWidth: 0,
  marginRight: open ? "0.5rem" : "auto",
  justifyContent: "center",
}));
