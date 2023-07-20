import { SxProps } from "@mui/material";

export interface InvoiceCellProps {
  item: { [x: string]: string };
  key: string;
}

export type InvoiceStyleProps = {
  borderColor?: string;
};

export type Note = {
  id: string | number;
  noteId: string;
  note: string;
};

export type NoteId = string | number;

export type NEW_NOTE_PROPS = {
  value: string;
};

// Services

export type ItemType = {
  id: string;
  name: string;
  type: string;
  label: string;
  value: string | number;
  placeholder: string;
  isRequired: boolean;
  icon: any;
  isIcon: boolean;
  ariaLabel: string;
};

export type RowFieldsType = ItemType[];

interface RowFieldProps {
  rowFields: RowFieldsType;
  rowIndex: number;
}

interface StyleProps {
  commonStyle: any;
}

interface ActionHandlers {
  addItem: (index: number) => void;
  removeItem: (index: number) => void;
}

export interface CreateRowDataProps
  extends RowFieldProps,
    StyleProps,
    ActionHandlers {
  items: RowFieldsType[];
  addItem: (index: number) => void;
  removeItem: (index: number) => void;
}

interface ServiceHandlerProps {
  handleAddItem: () => void;
  handleRemoveItem: () => void;
}

export interface ServiceRowProps
  extends RowFieldProps,
    ServiceHandlerProps,
    StyleProps {
  numberOfItems: number;
}

export interface ServiceCellProps extends ServiceHandlerProps {
  rowItem: ItemType;
  isLastCellInRow: boolean;
  rowItemIndex: number;
  cellKey: string;
  cellName: string;
  cellStyle: SxProps;
}

type RowDataIntexType = {
  "row-number": number;
};

type RowActionType = {
  id: number;
  action: "Add" | "Remove";
};

export type RowDataProps = ItemType | RowDataIntexType | RowActionType[];
