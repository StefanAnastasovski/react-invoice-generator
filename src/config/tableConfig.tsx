import { serviceConfig } from "./components/ServiceConfig";
import { invoiceConfig } from "./components/InvoiceConfig";
import { customerConfig } from "./components/CustomerConfig";
import { invoiceNotesConfig } from "./components/InvoiceNotesConfig";

export const tableConfig = {
  customers: customerConfig,
  services: serviceConfig,
  invoices: invoiceConfig,
  invoiceNotes: invoiceNotesConfig,
};
