import { Routes, Route } from "react-router-dom";

import { Dashboard } from "@features/Dashboard";
import {
  customersRoutes,
  errorsRoutes,
  homeRoutes,
  servicesRoutes,
} from "./routes";
import { Customers } from "@pages/Customers";
import { NotFound } from "@pages/errors";
import { Services } from "@pages/Services";
import { Invoices } from "@pages/Invoices";
import { invoicesRoutes } from "./routes/invoices";

const BASE_ROUTE = "/";

export const AppRouter = () => {
  return (
    <Routes>
      {/* Home */}
      <Route path={`${BASE_ROUTE}${homeRoutes.list}`} element={<Dashboard />} />

      {/* Customers */}
      <Route
        path={`${BASE_ROUTE}${customersRoutes.list}`}
        element={<Customers />}
      />
      <Route
        path={`${BASE_ROUTE}${customersRoutes.new}`}
        element={<Customers isNew />}
      />
      <Route
        path={`${BASE_ROUTE}${customersRoutes.edit}`}
        element={<Customers isEdit />}
      />

      {/* Services */}
      <Route
        path={`${BASE_ROUTE}${servicesRoutes.list}`}
        element={<Services />}
      />
      <Route
        path={`${BASE_ROUTE}${servicesRoutes.new}`}
        element={<Services isNew />}
      />
      <Route
        path={`${BASE_ROUTE}${servicesRoutes.edit}`}
        element={<Services isEdit />}
      />

      {/* Invoices */}
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.list}`}
        element={<Invoices />}
      />
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.edit}`}
        element={<Invoices isEdit />}
      />
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.details}`}
        element={<Invoices isInvoiceTemplate />}
      />
      
      {/* Invoice Settings */}
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.companyDetails}`}
        element={<Invoices isNew />}
      />
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.invoiceSettings}`}
        element={<Invoices isNew />}
      />
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.taxDetails}`}
        element={<Invoices isNew />}
      />
      <Route
        path={`${BASE_ROUTE}${invoicesRoutes.notes}`}
        element={<Invoices isNew />}
      />

      {/* Errors */}
      <Route path={errorsRoutes.notFound} element={<NotFound />} />
    </Routes>
  );
};
