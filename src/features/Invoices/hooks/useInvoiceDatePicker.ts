import { isWorkDay } from "./../../../utils/datePickerUtils";
import React, { useState } from "react";
import {
  formatDueDate,
  formatIssueDate,
  getDayNumberInWeek,
} from "@utils/datePickerUtils";
import { Moment } from "moment";
import {
  ErrorItemProps,
  ErrorProps,
  IssueAndDueDateProps,
} from "types/components/DateProps";

const initialDateState: IssueAndDueDateProps = {
  issueDateValue: formatIssueDate(),
  dueDateValue: formatDueDate(),
};

const initialErrorState = {
  issueDate: {
    isError: false,
    message: "",
    helperText: "",
  } as ErrorItemProps,
  dueDate: {
    isError: false,
    message: "",
    helperText: "",
  } as ErrorItemProps,
};
export const useInvoiceDatePicker = () => {
  const [error, setError] = useState<ErrorProps>({ ...initialErrorState });
  const [datePickerState, setDatePickerState] = useState<IssueAndDueDateProps>({
    ...initialDateState,
  });
  const issueDateValue = datePickerState.issueDateValue;
  const dueDateValue = datePickerState.dueDateValue;
  const [isDateEditable, setIsDateEditable] = React.useState({
    canEditIssueDate: true,
    canEditDueDate: true,
  });

  const setIssueDate = (newDate: Moment) => {
    setDatePickerState((prevState) => ({
      ...prevState,
      issueDateValue: newDate,
    }));
  };

  const setErrorState = (item: ErrorProps) => {
    setError((prevState) => ({
      ...prevState,
      ...item,
    }));
  };

  const setDueDate = (
    newDate: Moment,
    _isFormat = false as boolean | undefined
  ) => {
    setDatePickerState((prevState) => ({
      ...prevState,
      dueDateValue: _isFormat ? formatDueDate(newDate) : newDate,
    }));
  };

  const handleEditIssueDate = (canEditIssueDate?: boolean) => {
    setIsDateEditable((prevState) => ({
      ...prevState,
      canEditIssueDate: !canEditIssueDate
        ? !prevState.canEditIssueDate
        : canEditIssueDate,
    }));
  };

  const handleEditDueDate = (canEditDueDate?: boolean) => {
    setIsDateEditable((prevState) => ({
      ...prevState,
      canEditDueDate: !canEditDueDate
        ? !prevState.canEditDueDate
        : canEditDueDate,
    }));
  };

  // TODO: handle issue and due date can be refactored
  const handleIssueDate = (newDate: Moment) => {
    // control flag
    let canSetDate = false;

    //  Issue Date is Valid if it's the same date as Due Date or it's Before Due Date.
    const isIssueDateValid =
      newDate.isBefore(dueDateValue) || newDate.isSame(dueDateValue);

    if (isWorkDay(getDayNumberInWeek(newDate))) {
      canSetDate = true;
    }

    if (!isIssueDateValid) {
      if (!isDateEditable.canEditDueDate) canSetDate = false;
    }

    if (!canSetDate) {
      setDateError(canSetDate, true, setError);
      return;
    }
    setIssueDate(newDate);
    isDateEditable.canEditDueDate && setDueDate(newDate, true);
    handleEditIssueDate();
    setErrorState({ issueDate: { ...initialErrorState.issueDate } });
  };

  // TODO: handle issue and due date can be refactored
  const handleDueDate = (newDate: Moment) => {
    // control flag
    let canSetDate = false;

    //  Due Date is Valid if it's the same date as Issue Date or it's After Issue Date.
    const isDueDateValid =
      newDate.isAfter(issueDateValue) || newDate.isSame(issueDateValue);

    // control
    if (isWorkDay(getDayNumberInWeek(newDate))) {
      canSetDate = true;
    }

    if (!isDueDateValid) {
      if (!isDateEditable.canEditIssueDate) canSetDate = false;
    }

    if (!canSetDate) {
      setDateError(canSetDate, false, setError);
      return;
    }
    setDueDate(newDate);
    isDateEditable.canEditIssueDate && setIssueDate(newDate);
    handleEditDueDate();
    setErrorState({ dueDate: { ...initialErrorState.dueDate } });
  };

  return {
    ...isDateEditable,
    error,
    issueDateValue,
    dueDateValue,
    setIsDateEditable,
    handleEditIssueDate,
    handleEditDueDate,
    handleIssueDate,
    handleDueDate,
  };
};

const setDateError = (
  isValid: boolean,
  isIssueDate: boolean,
  setError: any
) => {
  if (!isValid) {
    const { message, helperText } = isIssueDate
      ? ERROR_MESSAGES.ISSUE_DATE
      : ERROR_MESSAGES.DUE_DATE;
    const errorKey = isIssueDate ? "issueDate" : "dueDate";
    const errorObj = {
      isError: true,
      message,
      helperText,
    };
    return setError((prevState: any) => ({
      ...prevState,
      [errorKey]: errorObj,
    }));
  }
};

const ERROR_MESSAGES = {
  ISSUE_DATE: {
    message: "Please select a valid Issue Date.",
    helperText:
      "Select a date that is the same as or before Due Date. The issue date can not be Saturday or Sunday",
  },
  DUE_DATE: {
    message: "Please select a valid Due Date.",
    helperText:
      "Select a date that is the same as or after Issue Date. The due date can not be Saturday or Sunday",
  },
};
