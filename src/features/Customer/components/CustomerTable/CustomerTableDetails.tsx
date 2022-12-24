import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import { Checkbox, Theme, useTheme } from "@mui/material";
import {
  KeyboardArrowRight as KeyboardArrowRightIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { CustomTableCell } from "@components/atoms/Table/CustomTableCell";
import { CustomerTableBodyCollapse } from "./CustomerTableBodyCollapse";
import { CustomerTableDetailsProps } from "@features/Customer/types/CustomerTableTypes";
import { TableCustomerProps } from "@features/Customer/types/NewCustomerTypes";

const CELL_WIDTH = {
  checkbox: "50px",
  collapse: "50px",
  companyName: "200px",
  location: "200px",
  edb: "120px",
  embs: "50px",
  actions: " 100px",
};

const ARIA_LABEL = {
  collapse: "expand row",
  selectCustomer: "select customer",
};

export const CustomerTableDetails = ({
  customerData,
  page,
  rowsPerPage,
  selectedRows,
  collapseId,
  handleCollapse,
  onSelectClick,
}: CustomerTableDetailsProps) => {
  const theme = useTheme();
  // TODO: remove when delete and BE are ready, only test purposes
  const [data, setData] = useState<TableCustomerProps[]>([...customerData]);
  const handleDelete = (edb: number | string) => {
    const filteredCustomerData = customerData.filter((item) => {
      return item.edb !== edb;
    });
    return setData(filteredCustomerData);
    // TODO: implement delete when BE is ready
  };
  const handleEdit = (edb: number | string) => {
    console.log("handle Edit");
    // /customers/:{edb}
    // TODO: implement edit when BE is ready
  };

  return (
    <>
      {(rowsPerPage > 0
        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : data
      ).map((customerDetails: any) => {
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
        } = customerDetails;
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
            <TableRow key={companyName} style={styles(theme).container}>
              <CustomTableCell
                style={styles(theme, CELL_WIDTH.checkbox).cellWidth}
              >
                <Checkbox
                  checked={
                    selectedRows.length > 0 && selectedRows.includes(edb)
                  }
                  onChange={() => onSelectClick(edb)}
                  inputProps={{
                    "aria-label": ARIA_LABEL.selectCustomer,
                  }}
                />
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CELL_WIDTH.collapse).cellWidth}
              >
                <IconButton
                  onClick={() => handleCollapse(edb)}
                  aria-label={ARIA_LABEL.collapse}
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
                style={styles(theme, CELL_WIDTH.companyName).cellWidth}
              >
                {companyName}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CELL_WIDTH.location).cellWidth}
              >
                {`${address}, ${stateRegion}, ${zipCode} - ${country}`}
              </CustomTableCell>
              <CustomTableCell style={styles(theme, CELL_WIDTH.edb).cellWidth}>
                {edb}
              </CustomTableCell>
              <CustomTableCell style={styles(theme, CELL_WIDTH.embs).cellWidth}>
                {embs}
              </CustomTableCell>
              <CustomTableCell
                style={styles(theme, CELL_WIDTH.actions).cellWidth}
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

            <CustomerTableBodyCollapse
              collapseData={collapseData}
              shouldCollapse={shouldCollapse}
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
