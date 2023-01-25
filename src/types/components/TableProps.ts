import { SxProps } from "@mui/material";
import { StyleSxCSSPropertiesProps } from "types/StyleProps";

export interface PageAndRowsPerPage {
  page: number;
  rowsPerPage: number;
}

export interface TablePaginationActionsProps extends PageAndRowsPerPage {
  count: number;
  onPageChange: (event: TablePaginationEventProp, newPage: number) => void;
}
export type TablePaginationEventProp = React.MouseEvent<HTMLButtonElement>;

export type EventChangePageProp = React.MouseEvent<HTMLButtonElement> | null;
export type EventChangeRowsPerPageProp = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export interface SelectedRows {
  selectedRows: string[];
}

export interface HandleCollapseAndOnSelectClick {
  handleCollapse?: (v: string | number) => void;
  onSelectClick?: (v: string | number) => void;
}

export interface CollapseId {
  collapseId: string;
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

export interface CollapseData {
  collapseData: CollapseDataProps;
}

export interface TableActionsProps {
  onSelectClick: (v: string | number) => void;
  handleCollapse: (v: string | number) => void;
  handleDelete: (v: string | number) => void;
  handleEdit: (v: string | number) => void;
}

export interface TablePageProps {
  isEdit?: boolean;
  isNew?: boolean;
}

export interface TableConfigProps extends TablePageProps {
  config: any; // TODO: change any
}

export interface TableCellsComponent {
  cellComponent: any;
  formattedData: any;
  rowId: string | number;
  tableCellWidth: { [x: string]: string };
}

export interface TableDetailsWrapperProps extends TableActionsProps {
  tableData: any;
  tableCellWidth: { [x: string]: string };
  ariaLabelContent: { [x: string]: string };
  colSpan: number;
  detailsComponent: (props: any) => JSX.Element;
  getFormattedData: (v: any) => {
    rowId: number;
    formattedData: any;
    collapseData: any;
  };
}

export interface TableDetailsProps {
  params: TableDetailsWrapperProps;
  details: any;
  tableStyle: any;
  collapseId: string | number;
}

export interface TableBodyCollapseWrapperProps {
  shouldCollapse: boolean;
  colSpan: number;
  titleLeft: string;
  titleRight: string;
  collapseDataLeft: any; // change
  collapseDataRight: any; // change
}

export interface ExtraInfoProps {
  title: string;
  collapseData: any;
  style: any;
}

export interface ExtraInfoComponentProps {
  title: string;
  text: string;
}

export interface TableHeadProps {
  titles: string[]; // titiles
  onSelectAllClick: () => void;
}

export interface CustomerTableCellProps {
  children: React.ReactNode;
  style?: React.CSSProperties | SxProps;
  paddingProps?: "none" | "normal" | "checkbox";
  align?: "center" | "left" | "right" | "justify" | "inherit";
  component?: string;
  scope?: string;
  otherProps?: any;
  colSpan?: number;
}

export interface TableBodyWrapperProps {
  children: React.ReactNode;
  tableData: any;
}

export interface CustomTableProps {
  children: React.ReactNode;
  titles: string[];
  tableData: any;
  onSelectAllClick: () => void;
}

export interface TableStyleProp {
  style?: StyleSxCSSPropertiesProps;
}

export interface HeaderTitleProps extends TableStyleProp {
  titles: string[];
}

export interface useTableProps extends TableStyleProp {
  columnsData?: any;
}
