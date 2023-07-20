import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { invoiceSender } from "@features/Invoices/constants/invoiceTemplate";

export const useTaxable = () => {
  const dispatch = useDispatch();
  const taxableData = useSelector((state: any) => state.invoice.taxable);

  useEffect(() => {
    // TODO: #1 - get data from BE

    // tax can depends on Service/Item, but in this case it's the same for the all services
    const { taxable } = invoiceSender;

    setTaxable(taxable);

    // TODO: #2 - update dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setTaxable = (taxable: number) => {
    dispatch(invoiceActions.setTaxable({ taxable }));
  };

  const getTaxable = () => {
    return taxableData;
  };

  return {
    setTaxable,
    getTaxable,
  };
};
