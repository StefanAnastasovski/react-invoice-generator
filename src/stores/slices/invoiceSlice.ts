import { createSlice } from "@reduxjs/toolkit";
import {
  BankType,
  CompanyAddressType,
  CompanyContactType,
  CompanyType,
  InvoiceSummaryType,
  NoteType,
  ServiceType,
} from "types/InvoiceProps";

// TODO: add logo url
const initialState: InvoiceInitialProps = {
  company: {
    name: "",
    cin: "",
    tin: "",
  },
  companyAddress: {
    country: "",
    city: "",
    address: "",
    zipCode: "",
  },
  customer: {
    name: "",
    cin: "",
    tin: "",
  },
  customerAddress: {
    country: "",
    city: "",
    address: "",
    zipCode: "",
  },
  bank: {
    name: "",
    account: "",
  },
  bankAddress: {
    country: "",
    city: "",
    address: "",
    zipCode: "",
  },
  contact: {
    email: "",
    phoneNumber: "",
    website: "",
  },
  summary: {
    discount: 0,
    subtotal: 0,
  },
  taxable: null,
  invoiceNumber: "",
  authorizedSignature: "",
  issueDate: "",
  dueDate: "",
  notes: [],
  services: [],
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setCompany: (state, { payload: { company } }) => {
      const { company: companyState } = state;

      companyState.name = company?.name || "";
      companyState.cin = company?.cin || "";
      companyState.tin = company?.tin || "";
    },
    setCompanyAddress: (state, { payload: { companyAddress } }) => {
      const { companyAddress: companyAddressState } = state;

      companyAddressState.country = companyAddress?.country || "";
      companyAddressState.city = companyAddress?.city || "";
      companyAddressState.address = companyAddress?.address || "";
      companyAddressState.zipCode = companyAddress?.zipCode || "";
    },
    setCustomer: (state, { payload: { customer } }) => {
      const { customer: customerState } = state;

      customerState.name = customer?.name || "";
      customerState.cin = customer?.cin || "";
      customerState.tin = customer?.tin || "";
    },
    setCustomerAddress: (state, { payload: { customerAddress } }) => {
      const { customerAddress: customerAddressState } = state;

      customerAddressState.country = customerAddress?.country || "";
      customerAddressState.city = customerAddress?.city || "";
      customerAddressState.address = customerAddress?.address || "";
      customerAddressState.zipCode = customerAddress?.zipCode || "";
    },
    setBank: (state, { payload: { bank } }) => {
      const { bank: bankState } = state;

      bankState.name = bank.name;
      bankState.account = bank.account;
    },
    setBankAddress: (state, { payload: { bankAddress } }) => {
      const { bankAddress: bankAddressState } = state;

      bankAddressState.country = bankAddress?.country || "";
      bankAddressState.city = bankAddress?.city || "";
      bankAddressState.address = bankAddress?.address || "";
      bankAddressState.zipCode = bankAddress?.zipCode || "";
    },
    setContact: (state, { payload: { contact } }) => {
      const { contact: contactState } = state;

      contactState.email = contact.email;
      contactState.phoneNumber = contact.phoneNumber;
      contactState.website = contact.website;
    },
    setInvoiceDates: (state, { payload: { dates } }) => {
      state.issueDate = dates.issueDate;
      state.dueDate = dates.dueDate;
    },
    setInvoiceNumber: (state, { payload: { invoiceNumber } }) => {
      state.invoiceNumber = invoiceNumber || "";
    },
    setTaxable: (state, { payload: { taxable } }) => {
      state.taxable = taxable || null;
    },
    setSummary: (state, { payload: { summary } }) => {
      state.summary = summary;
    },
    setInvoiceData: (state, { payload: { invoice } }) => {
      const { invoiceNumber, taxable } = state;
      state.invoiceNumber = invoice.invoiceNumber || invoiceNumber || "";
      state.taxable = invoice.taxable || taxable || 0;
    },
    setAuthorizedSignature: (state, { payload: { authorizedSignature } }) => {
      state.authorizedSignature = authorizedSignature;
    },
    setNotes: (state, { payload: { notes } }) => {
      state.notes = notes;
    },
    setServices: (state, { payload: { services } }) => {
      state.services = services;
    },

    resetInvoiceState: (state) => {
      state = initialState;
    },

    // TODO: add addNote, removeNote, AddService, RemoveService
  },
});

export const invoiceReducer = invoiceSlice.reducer;
export const invoiceActions = invoiceSlice.actions;

export default invoiceSlice;

type InvoiceInitialProps = {
  company: CompanyType;
  companyAddress: CompanyAddressType;
  customer: CompanyType;
  customerAddress: CompanyAddressType;
  bank: BankType;
  bankAddress: CompanyAddressType;
  contact: CompanyContactType;
  invoiceNumber: string;
  authorizedSignature: string;
  issueDate: string;
  dueDate: string;
  notes: NoteType[];
  taxable: number | null;
  services: ServiceType[];
  summary: InvoiceSummaryType;
};
