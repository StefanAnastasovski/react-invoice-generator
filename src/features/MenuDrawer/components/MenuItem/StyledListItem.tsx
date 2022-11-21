import { ListItem, styled } from "@mui/material";

export const StyledListItem = styled(ListItem)(() => {
  return {
    padding: 0,
    borderRadius: "10px",
    display: "block",
    marginTop: "2px",
    "& .MuiCollapse-root": {
      // background: "",
      // color: "",
    },
    "&:hover > div:first-of-type": {
      // borderLeft: `3px solid ${""} `,
      // background: "",
    },
    "&.Mui-selected > div:first-of-type": {
      // background: "",
      // borderLeft: `3px solid ${""}`,
      // color: "",
    },
    "&.Mui-selected > div:first-of-type .MuiTypography-root, .MuiCollapse-root .Mui-selected  .MuiTypography-root ":
      {
        // color: "",
      },
    "&.Mui-selected svg:not(.target-icon)": {
      // fill: "",
    },
    "&.Mui-selected .target-icon": {
      // stroke: "",
    },
  };
});
