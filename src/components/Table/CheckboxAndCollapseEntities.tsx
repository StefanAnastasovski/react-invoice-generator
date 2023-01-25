import React from "react";
import { useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { Checkbox } from "@mui/material";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from "@mui/icons-material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { TABLE_COMMON_CELL_NAMES } from "@constants/table";

export const CheckboxAndCollapseEntities = ({
  shouldCollapse,
  ariaLabelContent,
  rowId,
  handleCollapse,
  onSelectClick,
  getStyle,
}: any) => {
  const { selectedRows } = useSelector((state: any) => state.table);
  return (
    <>
      <CustomTableCell
        style={getStyle({ cellName: TABLE_COMMON_CELL_NAMES.checkbox })}
      >
        <Checkbox
          checked={selectedRows.length > 0 && selectedRows.includes(rowId)}
          onChange={onSelectClick}
          inputProps={{
            "aria-label": ariaLabelContent.selectCheckbox,
          }}
        />
      </CustomTableCell>
      <CustomTableCell
        style={getStyle({ cellName: TABLE_COMMON_CELL_NAMES.collapse })}
      >
        <IconButton
          onClick={handleCollapse}
          aria-label={ariaLabelContent.ariaCollapse}
        >
          {shouldCollapse ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )}
        </IconButton>
      </CustomTableCell>
    </>
  );
};
