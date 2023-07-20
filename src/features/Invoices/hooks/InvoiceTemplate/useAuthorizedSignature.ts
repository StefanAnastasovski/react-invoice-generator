import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import { invoiceSender } from "@features/Invoices/constants/invoiceTemplate";

export const useAuthorizedSignature = () => {
  const dispatch = useDispatch();
  const authorizedSignatureData = useSelector(
    (state: any) => state.invoice.authorizedSignature
  );
  useEffect(() => {
    // it's only one authorized person for signature in this case
    const { authorizedSignature } = invoiceSender;

    setAuthorizedSignature(authorizedSignature);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setAuthorizedSignature = (authorizedSignature: string) => {
    dispatch(invoiceActions.setAuthorizedSignature({ authorizedSignature }));
  };

  const getAuthorizedSignature = () => {
    return authorizedSignatureData;
  };

  return {
    setAuthorizedSignature,
    getAuthorizedSignature,
  };
};
