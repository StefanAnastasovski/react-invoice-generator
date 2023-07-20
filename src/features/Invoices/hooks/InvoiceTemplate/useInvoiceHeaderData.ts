import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { invoiceActions } from "@stores/slices/invoiceSlice";
import {
  CompanyAddressType,
  CompanyContactType,
  CompanyType,
} from "types/InvoiceProps";
import { invoiceSender } from "@features/Invoices/constants/invoiceTemplate";

export const useInvoiceHeaderData = () => {
  const dispatch = useDispatch();

  const companyData = useSelector((state: any) => state.invoice.company);
  const companyAddressData = useSelector(
    (state: any) => state.invoice.companyAddress
  );
  const contactData = useSelector((state: any) => state.invoice.contact);

  useEffect(() => {
    // TODO: #1 - get data from BE
    const { company, companyAddress, contact } = invoiceSender;

    setCompanyInfo(company);
    setCompanyAddress(companyAddress);
    setContactInfo(contact);

    // TODO: #2 - update dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setCompanyInfo = (company: CompanyType) => {
    dispatch(invoiceActions.setCompany({ company }));
  };
  const setCompanyAddress = (companyAddress: CompanyAddressType) => {
    dispatch(invoiceActions.setCompanyAddress({ companyAddress }));
  };
  const setContactInfo = (contact: CompanyContactType) => {
    dispatch(invoiceActions.setContact({ contact }));
  };

  const getCompanyInfo = () => {
    return companyData;
  };
  const getCompanyAddress = () => {
    return companyAddressData;
  };
  const getContactInfo = () => {
    return contactData;
  };

  return {
    setCompanyInfo,
    setCompanyAddress,
    setContactInfo,
    getCompanyInfo,
    getCompanyAddress,
    getContactInfo,
  };
};
