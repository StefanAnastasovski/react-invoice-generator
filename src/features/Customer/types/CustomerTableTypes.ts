import { TableCustomerProps } from "./NewCustomerTypes";

interface PageAndRowsPerPage {
  page: number;
  rowsPerPage: number;
}

interface CollapseId {
  collapseId: string;
}

interface HandleCollapseAndOnSelectClick {
  handleCollapse: (v: string | number) => void;
  onSelectClick: (v: string | number) => void;
}

interface SelectedRows {
  selectedRows: string[];
}

interface CustomerData {
  customerData: TableCustomerProps[];
}

interface CollapseData {
  collapseData: CollapseDataProps;
}

export interface CustomerTableBodyProps
  extends HandleCollapseAndOnSelectClick,
    PageAndRowsPerPage,
    CollapseId,
    SelectedRows {}

export interface CustomerTableBodyCollapseProps extends CollapseData {
  shouldCollapse: boolean;
}

export type CollapseDataProps = {
  [x: string]: {
    title: string;
    items: {
      id: string;
      title: string;
      text: any;
    }[];
  };
};

export interface CustomerTableDetailsProps
  extends CollapseId,
    SelectedRows,
    PageAndRowsPerPage,
    CustomerData {
  handleCollapse: (v: string | number) => void;
  onSelectClick: (v: string | number) => void;
}

export interface CustomerTableFooterProps extends PageAndRowsPerPage {
  setPage: any;
  setRowsPerPage: any;
  handleAllCollapse: () => void;
  resetSelectedRows: () => void;
}

export interface CustomerTableHeadProps extends SelectedRows {
  rowsPerPageData: TableCustomerProps[];
  onSelectAllClick: () => void;
}

export interface TablePaginationActionsProps extends PageAndRowsPerPage {
  count: number;
  onPageChange: (event: TablePaginationEventProp, newPage: number) => void;
}

export type EventChangePageProp = React.MouseEvent<HTMLButtonElement> | null;
export type EventChangeRowsPerPageProp = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
export type TablePaginationEventProp = React.MouseEvent<HTMLButtonElement>;
