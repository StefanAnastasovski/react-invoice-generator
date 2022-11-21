import { ListItemText, styled } from "@mui/material";
import { OpenProps } from "types/OpenProps";

export const StyledListItemText = styled(ListItemText, {
  shouldForwardProp: (props) => props !== "isOpen",
})<OpenProps>(({ isOpen }) => ({
  opacity: isOpen ? 1 : 0,
  marginBottom: 0,
  "& .MuiListItemText-primary": {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: 0.5,
  },
}));
