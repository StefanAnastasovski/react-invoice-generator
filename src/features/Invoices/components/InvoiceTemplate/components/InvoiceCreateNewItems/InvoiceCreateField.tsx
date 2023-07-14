import { useTheme, Theme } from "@mui/material";
import { CustomSelect } from "@components/atoms";
import { serviceFields } from "@features/Services/constants/serviceFields";
import { InvoiceCreateNewItemActionsButtons } from "./InvoiceCreateNewItemActionsButtons";
import { ReusableInputField } from "@components/ReusableTextField";
import { EmptyVoidFn } from "types/CommonProps";

const SERVICE_FIELDS = serviceFields[2]?.items?.[0]?.items;

// TODO: fix any
export const InvoiceCreateField = ({
  rowItem,
  rowItemIndex,
  isLastCellInRow,
  handleAddItem,
  handleRemoveItem,
}: {
  rowItem: any;
  rowItemIndex: number;
  isLastCellInRow: boolean;
  handleAddItem: EmptyVoidFn;
  handleRemoveItem: EmptyVoidFn;
}) => {
  const theme = useTheme();
  const style = styles(theme);

  // First row will always be a number: 1,2,3,...
  // Last row will always be actions: Add, Remove,..
  if (rowItemIndex === 0) {
    return rowItem["row-number"];
  } else if (rowItemIndex > 0 && !isLastCellInRow) {
    const isCategoryField = rowItem.id === "category";
    return isCategoryField ? (
      <CustomSelect
        selectId={rowItem.name}
        selectName={rowItem.name}
        value={rowItem.value}
        itemList={SERVICE_FIELDS || []}
        // TODO: add formik
        // formik={{}}
        selectStyle={style.selectStyle}
      />
    ) : (
      <ReusableInputField
        item={rowItem}
        isTextCentralized={rowItemIndex !== 1}
      />
    );
  } else if (isLastCellInRow) {
    return (
      <InvoiceCreateNewItemActionsButtons
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
      />
    );
  }

  return null;
};

const styles = (theme: Theme) => {
  return {
    selectStyle: {
      maxHeight: "30px",
      marginX: 1,
      fontSize: 14,
      color: theme.palette.primary.dark,
      border: `1px solid ${theme.palette.secondary.main}`,
      "& svg": {
        color: theme.palette.primary.dark,
        paddingLeft: 1,
      },
      "& fieldset": {
        border: 0,
      },
    },
  };
};
