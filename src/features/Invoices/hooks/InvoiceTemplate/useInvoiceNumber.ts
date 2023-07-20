import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { invoiceSender } from "@features/Invoices/constants/invoiceTemplate";

export const useInvoiceNumber = () => {
  const dispatch = useDispatch();
  const invoiceNumberData = useSelector(
    (state: any) => state.invoice.invoiceNumber
  );

  useEffect(() => {
    // TODO: #1 - get data from BE
    const { invoiceNumber } = invoiceSender;

    setInvoiceNumber(invoiceNumber);

    // TODO: #2 - update dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setInvoiceNumber = (invoiceNumber: string) => {
    dispatch(invoiceActions.setInvoiceNumber({ invoiceNumber }));
  };

  const getInvoiceNumber = () => {
    return invoiceNumberData;
  };

  return {
    setInvoiceNumber,
    getInvoiceNumber,
  };
};
