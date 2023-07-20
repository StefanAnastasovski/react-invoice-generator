import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { InvoiceDatesType } from "types/InvoiceProps";
import { formatDueDate, formatIssueDate } from "@utils/datePickerUtils";

export const useInvoiceDates = () => {
  const dispatch = useDispatch();
  const issueDate = useSelector((state: any) => state.invoice.issueDate);
  const dueDate = useSelector((state: any) => state.invoice.dueDate);

  useEffect(() => {
    const issueDateValue = formatIssueDate();
    const dueDateValue = formatDueDate();

    const dates = {
      issueDate: issueDateValue.format("Do MMM YYYY"),
      dueDate: dueDateValue.format("Do MMM YYYY"),
    };
    setInvoiceDates(dates);
    // TODO: update dependency array
  }, []);

  const setInvoiceDates = (dates: InvoiceDatesType) => {
    dispatch(invoiceActions.setInvoiceDates({ dates }));
  };

  const getInvoiceDates = () => {
    return {
      issueDate: issueDate,
      dueDate: dueDate,
    };
  };

  return {
    setInvoiceDates,
    getInvoiceDates,
  };
};
