import { SxProps } from "@mui/material";
import {
  StyleDefaultProps,
  StyleSxCSSPropertiesProps,
} from "types/StyleProps";

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
  onSelectClick?: (v: string | number) => void;
  handleCollapse?: (v: string | number) => void;
  handleDelete?: (v: string | number) => void;
  handleEdit?: (v: string | number) => void;
  handleForward?: (v: string | number) => void;
}

export interface TablePageProps {
  isEdit?: boolean;
  isNew?: boolean;
}

export interface TableConfigProps extends TablePageProps {
  config: any; // TODO: change any
  isCheckboxAndCollapseEnabled?: boolean;
}

export interface TableCellsComponent {
  cellComponent: any;
  formattedData: any;
  rowId: string | number;
  tableCellWidth: { [x: string]: string };
}

export interface TableDetailsWrapperProps
  extends TableActionsProps,
    ComponentWrapperExtraProps {
  tableData: any;
  tableCellWidth: { [x: string]: string };
  ariaLabelContent: { [x: string]: string };
  colSpan: number;
  actions: any;
  isCheckboxAndCollapseEnabled?: boolean;
  detailsComponent: (props: any) => JSX.Element;
  getFormattedData: (v: any) => {
    rowId: number;
    formattedData: any;
    collapseData: any;
  };
}

export interface TableDetailsProps extends ComponentWrapperExtraProps {
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

export interface TableHeadProps extends ComponentWrapperExtraProps {
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

export interface CustomTableProps extends ComponentWrapperExtraProps {
  children: React.ReactNode;
  titles: string[];
  tableData: any;
  onSelectAllClick: () => void;
}

export interface TableStyleProp {
  style?: StyleSxCSSPropertiesProps | StyleDefaultProps;
}

export interface HeaderTitleProps extends TableStyleProp {
  titles: string[];
  hasBorder?: boolean;
}

export interface useTableProps extends TableStyleProp {
  columnsData?: any;
  hasBorder?: boolean;
}

export interface TableActionsComponentProps {
  tableCellWidth: any;
  handleDelete?: (() => void) | undefined;
  handleEdit?: (() => void) | undefined;
  handleForward?: (() => void) | undefined;
}

export interface ComponentWrapperExtraProps {
  isCheckboxAndCollapseEnabled?: boolean;
}

export interface TableCellsProps {
  formattedData: any;
  rowId: string;
  tableCellWidth: { [x: string]: string };
}
