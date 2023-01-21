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

export interface CustomTableActionsProps {
  isEdit?: boolean;
  isNew?: boolean;
}
