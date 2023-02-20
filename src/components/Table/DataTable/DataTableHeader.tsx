import React from "react";
import TableRow from "@mui/material/TableRow";
import { TableHead } from "@mui/material";
import { useTable } from "@hooks/index";

export const DataTableHeader = ({ titles, style }: any) => {
  const { renderHeaderColumns } = useTable({
    columnsData: titles,
    style: (style && style) || styles().header,
    hasBorder: false,
  });
  return (
    <TableHead>
      <TableRow>{renderHeaderColumns}</TableRow>
    </TableHead>
  );
};

const styles = () => {
  return {
    header: {
      fontSize: "16px",
      textAlign: "left",
    },
  };
};
