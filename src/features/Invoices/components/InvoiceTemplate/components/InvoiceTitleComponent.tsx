import { useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { joinStyles } from "@utils/styleUtils";
import { BoxFlex } from "@components/atoms";
import { Edit as EditIcon, Add as AddIcon } from "@mui/icons-material";

const ARIA_LABEL = {
  ADD: "toggle new invoice number",
};

export const InvoiceTitleComponent = ({
  title,
  invoiceNumber,
  style: compStyle,
}: any) => {
  const invoiceNumberValue = `${invoiceNumber.title}: ${invoiceNumber.value}`;
  const [canEditInvoiceNumber, setCanEditInvoiceNumber] = useState(false);
  const theme = useTheme();
  const style = styles(theme);

  const { text, title: titleColor, icons } = compStyle;

  const {
    fontSize,
    fontWeight: { bold },
    letterSpacing,
    textTransform: { uppercase },
    color: { textBlack },
  } = text;

  const titleStyle = joinStyles([
    fontSize.title,
    bold,
    uppercase,
    letterSpacing[1],
    titleColor,
  ]);
  const subtitleStyle = joinStyles([
    fontSize.subtitle,
    letterSpacing[1],
    textBlack,
  ]);

  const handleEditInvoiceNumber = () => {
    setCanEditInvoiceNumber(!canEditInvoiceNumber);
  };

  const handleAddInvoiceNumber = () => {
    // TODO: add logic to update the invoice number here
    setCanEditInvoiceNumber(false);
  };

  return (
    <>
      <Typography style={titleStyle}>{title}</Typography>
      <BoxFlex style={style.container}>
        {/* Show latest Invoice Number or add it manually*/}
        <Typography style={subtitleStyle}>{invoiceNumberValue}</Typography>
        <IconButton
          onClick={handleEditInvoiceNumber}
          sx={[icons, style.editIconButton]}
        >
          <EditIcon style={style.editIcon} />
        </IconButton>
      </BoxFlex>

      {/* TODO: add correct values */}
      {canEditInvoiceNumber && (
        <TextField
          // required={item.isRequired}
          // onChange={formik.handleChange}

          id={"invoice-number"}
          name={"invoice-number"}
          type={"text"}
          label={"Invoice Number"}
          placeholder={"OLD230001"}
          // value={formik.values[item.name]}
          autoComplete="off"
          fullWidth
          // multiline={isTextarea}
          // rows={textAreaRows}
          inputProps={{
            min: 0,
            // max: isPercentage ? 100 : undefined,
            style: { color: theme.palette.primary.dark },
          }}
          InputProps={{
            endAdornment: (
              <AddIconComponent
                onClick={handleAddInvoiceNumber}
                style={style}
              />
            ),
          }}
          InputLabelProps={
            {
              // error: isError,
              // color: isError ? "error" : "primary",
            }
          }
          // TODO: implement validation
          // helperText={isError ? errors[item.name] : ""}
          // error={isError}
          sx={[
            style.itemStyle,
            style.itemColorStyle,
            {
              // color: isError && style.errorColor,
            },
            // isError && style.errorHoverColor,
          ]}
        />
      )}
    </>
  );
};

const AddIconComponent = ({ onClick, style }: any) => {
  return (
    <InputAdornment position="end">
      <IconButton
        edge="end"
        aria-label={ARIA_LABEL.ADD}
        onClick={onClick}
        // onMouseDown={handleMouseDownPassword}
        sx={style.addIconButton}
      >
        <AddIcon style={style.addIcon} />
      </IconButton>
    </InputAdornment>
  );
};

const styles = (theme: Theme) => {
  return {
    container: {
      alignItems: "center",
    },
    editIconButton: {
      marginLeft: 1,
      border: `1px solid ${theme.palette.primary.main}`,
    },
    editIcon: {
      width: 20,
      height: 20,
      fill: theme.palette.primary.main,
    },
    addIconButton: {
      paddingX: 2,
      fill: theme.palette.primary.light,
      "& :hover": {
        fill: theme.palette.secondary.main,
      },
    },
    addIcon: {
      fill: theme.palette.primary.main,
    },
    itemStyle: {
      marginTop: 2,
    },
    itemColorStyle: {
      "& .MuiInputLabel-root": {
        color: theme.palette.primary.main,
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.secondary.main,
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: theme.palette.grey.A400,
        },
        "&:hover fieldset": {
          borderColor: theme.palette.primary.light,
        },
        "&.Mui-focused fieldset": {
          borderColor: theme.palette.secondary.main,
        },
      },
    },
  };
};
