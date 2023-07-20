export interface CompanyType {
  name: string;
  cin: string;
  tin: string;
}

export interface CompanyAddressType {
  country: string;
  city: string;
  address: string;
  zipCode: string;
}

export type BankType = {
  name: string;
  account: string;
};

export type CompanyContactType = {
  email: string;
  phoneNumber: string;
  website: string;
};

export type ServiceType = {
  description: string;
  category: string;
  rateOrItem: string | number;
  quantity: number;
  discount: number;
  amount: number;
};

export type NoteType = {
  id: string | number;
  noteId: string | number;
  note: string;
};

export type InvoiceDataType = {
  invoiceNumber: string;
  taxable: string;
};

export type InvoiceDatesType = {
  issueDate: string;
  dueDate: string;
};

export type InvoiceSummaryType = {
  discount: number;
  subtotal: number;
};
