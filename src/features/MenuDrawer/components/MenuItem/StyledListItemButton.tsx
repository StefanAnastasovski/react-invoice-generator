import { ListItemButton, styled } from "@mui/material";
import { OpenProps } from "types/OpenProps";

export const StyledListItemButton = styled(ListItemButton, {
  shouldForwardProp: (props) => props !== "isOpen",
})<OpenProps>(({ isOpen }) => ({
  minHeight: 48,
  borderRadius: "10px",
  padding: "2.5 0 2.5 0",
  justifyContent: isOpen ? "initial" : "center",
  "&:hover .MuiTypography-root": {
    // color: "",
  },
  "&:hover svg:not(.target-icon)": {
    // fill: "",
  },
  "&:hover .target-icon": {
    // stroke: "",
  },
}));