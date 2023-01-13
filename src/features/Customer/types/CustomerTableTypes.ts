import {
  CollapseData,
  CollapseId,
  HandleCollapseAndOnSelectClick,
  PageAndRowsPerPage,
  SelectedRows,
} from "types/components/TableProps";
import { TableCustomerProps } from "./NewCustomerTypes";

interface CustomerData {
  customerData: TableCustomerProps[];
}

export interface CustomerTableBodyCollapseProps extends CollapseData {
  shouldCollapse: boolean;
  colSpan: number;
}

export interface CustomerTableDetailsProps
  extends CollapseId,
    SelectedRows,
    PageAndRowsPerPage,
    CustomerData,
    HandleCollapseAndOnSelectClick {}

export interface CustomerTableHeadProps extends SelectedRows {
  rowsPerPageData: TableCustomerProps[];
  onSelectAllClick: () => void;
}

export interface CustomerTableDetailProps
  extends SelectedRows,
    PageAndRowsPerPage,
    HandleCollapseAndOnSelectClick,
    CollapseId {
  tableData: TableCustomerProps[];
}
