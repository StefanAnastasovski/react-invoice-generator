import { Moment } from "moment";
import { CSSProperties } from "react";
import { SxProps } from "@mui/material";
import { StyleCustomProps } from "types/StyleProps";

export type WeekDayProp = {
  [x: number]: DayProp;
};

export type DayProp =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type DayIntProp = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type ReusableDatePickerProps = {
  label: string;
  value: Moment;
  format: string;
  minDate: Moment;
  maxDate: Moment;
  onChange: (v: Moment | null) => void;
  style?: CSSProperties | SxProps;
  showConfirmButton?: boolean;
};

// Date Picker types
export type IssueAndDueDateProps = {
  issueDateValue: Moment;
  dueDateValue: Moment;
};

export type ErrorItemProps = {
  isError: boolean;
  message: string;
  helperText: string;
};

export type ErrorProps = {
  issueDate?: ErrorItemProps;
  dueDate?: ErrorItemProps;
};

export type ErrorMessageProps = {
  error: ErrorItemProps;
  style: StyleCustomProps;
};
