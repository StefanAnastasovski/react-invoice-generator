import { statuses, statusStyle } from "../constants/constants";

export const getStatusStyle = (status: string) => {
  return statusStyle[statuses[status]];
};
