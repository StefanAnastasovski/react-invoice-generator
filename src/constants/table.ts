import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  ArrowForward as ForwardIcon,
} from "@mui/icons-material";

export const TABLE_COMMON_CELL_WIDTH: { [x: string]: string } = {
  checkbox: "50px",
  collapse: "50px",
  actions: " 100px",
};

export const TABLE_COMMON_CELL_NAMES = {
  checkbox: "checkbox",
  collapse: "collapse",
  actions: "actions",
};

export const EMPTY_TABLE_ROW_HEIGHT = 80;

export const TABLE_ARIA_LABEL = {
  table: "custom pagination table",
  headerSelectAllCustomers: "select all customers",
  footerSelectProps: "rows per page",
  firstPage: "first page",
  lastPage: "last page",
  nextPage: "next page",
  previousPage: "previous page",
};

export const ALLOWED_ROWS_PER_PAGE = [5, 10, 25, { label: "All", value: -1 }];

export const DEFAULT_CELL_WIDTH = 80;

export const editAndDeleteActions = [
  { id: "sta-1", icon: EditIcon, onClick: "handleEdit" },
  { id: "sta-2", icon: DeleteIcon, onClick: "handleDelete" },
];

export const forwardActions = [
  { id: "sta-1", icon: ForwardIcon, onClick: "handleForward" },
];
