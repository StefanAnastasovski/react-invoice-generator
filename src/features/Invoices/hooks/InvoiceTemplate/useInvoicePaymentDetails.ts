import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invoiceActions } from "@stores/slices/invoiceSlice";
import { BankType, CompanyAddressType, CompanyType } from "types/InvoiceProps";
import { invoiceSender } from "@features/Invoices/constants/invoiceTemplate";

export const useInvoicePaymentDetails = () => {
  const dispatch = useDispatch();
  const customerData = useSelector((state: any) => state.invoice.customer);
  const customerAddressData = useSelector(
    (state: any) => state.invoice.customerAddress
  );
  const bankData = useSelector((state: any) => state.invoice.bank);
  const bankAddressData = useSelector(
    (state: any) => state.invoice.bankAddress
  );

  useEffect(() => {
    // TODO: #1 - get data from BE
    const { bank, bankAddress } = invoiceSender;

    setCompanyPaymentDetails(bank);
    setBankAddress(bankAddress);

    // TODO: #2 - update dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCustomer = (customer: CompanyType) => {
    dispatch(invoiceActions.setCustomer({ customer }));
  };

  const setCustomerAddress = (customerAddress: CompanyAddressType) => {
    dispatch(invoiceActions.setCustomerAddress({ customerAddress }));
  };
  const setCompanyPaymentDetails = (bank: BankType) => {
    dispatch(invoiceActions.setBank({ bank }));
  };
  const setBankAddress = (bankAddress: CompanyAddressType) => {
    dispatch(invoiceActions.setBankAddress({ bankAddress }));
  };

  const getCustomer = () => {
    return customerData;
  };
  const getCustomerAddress = () => {
    return customerAddressData;
  };
  const getCompanyPaymentDetails = () => {
    return bankData;
  };
  const getBankAddress = () => {
    return bankAddressData;
  };

  return {
    setCustomer,
    setCustomerAddress,
    setCompanyPaymentDetails,
    setBankAddress,
    getCustomer,
    getCustomerAddress,
    getCompanyPaymentDetails,
    getBankAddress,
  };
};
