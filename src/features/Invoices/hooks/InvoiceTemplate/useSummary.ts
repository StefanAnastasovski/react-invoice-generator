import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { InvoiceSummaryType } from "types/InvoiceProps";
import { invoiceDetailsData } from "@features/Invoices/constants/invoiceTemplate";
import { calculateSummary } from "@features/Invoices/utils/invoiceUtils";

export const useSummary = () => {
  const dispatch = useDispatch();
  const summaryData = useSelector((state: any) => state.invoice.summary);

  useEffect(() => {
    const summary = calculateSummary(invoiceDetailsData);
    setSummary(summary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSummary = (summary: InvoiceSummaryType) => {
    dispatch(invoiceActions.setSummary({ summary }));
  };

  const getSummary = () => {
    return summaryData;
  };

  return {
    setSummary,
    getSummary,
  };
};
