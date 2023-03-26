import { Checkbox, FormControlLabel } from "@mui/material";

// input type component
// TODO: fix any
export const CustomCheckbox = ({
  item,
  formik,
  style,
  isChecked,
  disableRipple,
}: any) => {
  return (
    <FormControlLabel
      label={item.label}
      componentsProps={{
        typography: style?.checkboxLabelTypographyStyle
          ? style?.checkboxLabelTypographyStyle
          : style?.checkboxLabelTypography,
      }}
      sx={
        style?.checkboxLabelStyle
          ? style?.checkboxLabelStyle
          : style?.checkboxLabel
      }
      control={
        <Checkbox
          name={item.name}
          checked={isChecked || (formik.values[item.name] as any as boolean)}
          onChange={formik && formik.handleChange}
          disableRipple={disableRipple}
          // sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
      }
    />
  );
};
