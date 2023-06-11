import moment, { Moment } from "moment";
import { DayIntProp } from "types/components/DateProps";

export const isWorkDay = (day: DayIntProp) => {
  if (day === 6 || day === 7) {
    return false;
  }
  return true;
};
// TODO: refactor => add functions to utils
export const addNDays = (dayNumber: number, newDate?: Moment) => {
  return moment(newDate).add(dayNumber, "days");
};

export const formatIssueDate = (date?: Moment) => {
  const day = parseInt(date?.format("E") || moment().format("E"));
  if (day === 6) {
    return moment().add(2, "days");
  } else if (day === 7) {
    return moment().add(1, "days");
  }
  return moment();
};

export const formatDueDate = (date?: Moment) => {
  const dayNumber = 7;
  const newDate = addNDays(dayNumber, date);
  const day = parseInt(newDate.format("E"));

  if (day === 6) {
    return addNDays(dayNumber + 2);
  } else if (day === 7) {
    return addNDays(dayNumber + 1);
  }
  return newDate;
};

export const getMinDate = (
  amount: moment.DurationInputArg1,
  unit: moment.unitOfTime.DurationConstructor
) => {
  return moment().subtract(amount, unit);
};

export const getMaxDate = (
  amount: moment.DurationInputArg1,
  unit: moment.unitOfTime.DurationConstructor
) => {
  return moment().add(amount, unit);
};

export const getDayNumberInWeek = (date: Moment) => {
  return parseInt(date.format("E")) as DayIntProp;
};
