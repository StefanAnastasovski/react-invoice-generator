import React from "react";
import { useSelector } from "react-redux";
import { Checkbox, Theme, useTheme } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { getDataPerTablePage } from "@utils/tableUtils";
import {
  CUSTOMER_ARIA_LABEL,
  CUSTOMER_TABLE_COL_SPAN,
} from "@features/Customer/constants/constants";
import { CUSTOMER_CELL_WIDTH } from "@features/Customer/constants/customerTable";
import { TableBodyCollapseWrapper } from "@components/Table";
import { CustomerTableDetailProps } from "@features/Customer/types/CustomerTypes";

export const CustomerTableDetails = ({
  onSelectClick,
  handleCollapse,
  handleDelete,
  handleEdit,
  tableData,
}: CustomerTableDetailProps) => {
  const theme = useTheme();
  const { selectedRows, collapseId, page, rowsPerPage } = useSelector(
    (state: any) => state.table
  );
  return (
    <>
      {getDataPerTablePage({
        rowsPerPage,
        page,
        tableData,
      }).map((details: any) => {
        const {
          edb,
          embs,
          companyName,
          address,
          zipCode,
          stateRegion,
          country,
          bankAccount,
          email,
          phoneNumber,
        } = details;
        const shouldCollapse = collapseId === edb;

        // TODO: get from BE
        const collapseData = {
          contact: {
            title: "Contact",
            items: [
              {
                id: "cci-1",
                title: "Email",
                text: email,
              },
              {
                id: "cci-2",
                title: "Phone Number",
                text: phoneNumber,
              },
            ],
          },
          bankAccount: {
            title: "Bank Account",
            items: [
              {
                id: "cbi-1",
                title: "Bank Account",
                text: bankAccount,
              },
            ],
          },
        };

        return (
          <React.Fragment key={edb}>
            <TableRow style={styles(theme).container}>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.checkbox).cellWidth}
              >
                <Checkbox
                  checked={
                    selectedRows.length > 0 && selectedRows.includes(edb)
                  }
                  onChange={() => onSelectClick(edb)}
                  inputProps={{
                    "aria-label": CUSTOMER_ARIA_LABEL.selectCustomer,
                  }}
                />
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.collapse).cellWidth}
              >
                <IconButton
                  onClick={() => handleCollapse(edb)}
                  aria-label={CUSTOMER_ARIA_LABEL.collapse}
                >
                  {shouldCollapse ? (
                    <KeyboardArrowDownIcon />
                  ) : (
                    <KeyboardArrowRightIcon />
                  )}
                </IconButton>
              </CustomTableCell>
              {/* TODO: refactor */}
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.companyName).cellWidth}
              >
                {companyName}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.location).cellWidth}
              >
                {`${address}, ${stateRegion}, ${zipCode} - ${country}`}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.edb).cellWidth}
              >
                {edb}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.embs).cellWidth}
              >
                {embs}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CUSTOMER_CELL_WIDTH.actions).cellWidth}
              >
                <EditIcon
                  sx={styles(theme).icons}
                  onClick={() => handleEdit(edb)}
                />{" "}
                <DeleteIcon
                  sx={styles(theme).icons}
                  onClick={() => handleDelete(edb)}
                />
              </CustomTableCell>
            </TableRow>
            <TableBodyCollapseWrapper
              keyId={edb}
              shouldCollapse={shouldCollapse}
              colSpan={CUSTOMER_TABLE_COL_SPAN}
              titleLeft={collapseData?.contact?.title}
              titleRight={collapseData?.bankAccount?.title}
              collapseDataLeft={collapseData?.contact?.items}
              collapseDataRight={collapseData?.bankAccount?.items}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const styles = (theme: Theme, cellWidth?: string | number) => {
  return {
    container: {
      width: 800,
    },
    cellWidth: {
      width: cellWidth,
    },
    icons: {
      fontSize: 24,
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  };
};
