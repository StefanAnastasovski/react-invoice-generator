import React from "react";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { useCommonStyles } from "@hooks/index";
import { TABLE_COMMON_CELL_NAMES } from "@constants/table";

export const TableActions = ({
  tableCellWidth,
  handleDelete,
  handleEdit,
}: Props) => {
  const { tableStyle } = useCommonStyles({
    cellWidth: tableCellWidth[TABLE_COMMON_CELL_NAMES.actions],
  });

  return (
    <CustomTableCell style={tableStyle.cellWidth}>
      <EditIcon sx={tableStyle.icons} onClick={handleEdit} />
      <DeleteIcon sx={tableStyle.icons} onClick={handleDelete} />
    </CustomTableCell>
  );
};

type Props = {
  tableCellWidth: any;
  handleDelete: () => void;
  handleEdit: () => void;
};
