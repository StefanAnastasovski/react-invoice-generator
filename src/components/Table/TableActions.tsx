import React from "react";
import { IconButton, SvgIcon } from "@mui/material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { useCommonStyles } from "@hooks/index";
import { TABLE_COMMON_CELL_NAMES } from "@constants/table";

export const TableActions = ({ tableCellWidth, actions }: any) => {
  const { tableStyle } = useCommonStyles({
    cellWidth: tableCellWidth[TABLE_COMMON_CELL_NAMES.actions],
  });
  return (
    <CustomTableCell style={tableStyle.cellWidth}>
      {renderActions({ actions, style: tableStyle })}
    </CustomTableCell>
  );
};

const renderActions = ({ actions, style }: any) => {
  const { iconButton: iconButttonStyle } = styles();
  return (
    <>
      {actions.map((item: any) => {
        return (
          <IconButton
            key={item.id}
            onClick={item.onClick}
            sx={iconButttonStyle}
          >
            <SvgIcon sx={style?.icons} component={item.icon} />
          </IconButton>
        );
      })}
    </>
  );
};

const styles = () => {
  return {
    iconButton: {
      padding: 0,
      "&:hover": { backgroundColor: "transparent" },
    },
  };
};
