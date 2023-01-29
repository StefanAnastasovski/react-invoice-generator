import { STATUS_COLORS } from "@constants/colors";
import { StatusesProps, StatusComponentProps } from "../types/StatusTypes";

export const statuses: StatusesProps = {
  Paid: "paid",
  Pending: "pending",
  Canceled: "canceled",
};

export const statusStyle: StatusComponentProps = {
  paid: {
    color: STATUS_COLORS.paid.color,
    backgroundColor: STATUS_COLORS.paid.backgroundColor,
  },
  pending: {
    color: STATUS_COLORS.pending.color,
    backgroundColor: STATUS_COLORS.pending.backgroundColor,
  },
  canceled: {
    color: STATUS_COLORS.canceled.color,
    backgroundColor: STATUS_COLORS.canceled.backgroundColor,
  },
};
