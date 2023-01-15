import { Routes, Route } from "react-router-dom";

import { Customer } from "@features/Customer";
import { Services } from "@features/Services";
import { Dashboard } from "@features/Dashboard";
import { NotFound } from "@pages/errors";
import {
  customersRoutes,
  errorsRoutes,
  homeRoutes,
  servicesRoutes,
} from "./routes";

export const AppRouter = () => {
  const baseRoute = "/";
  return (
    <Routes>
      {/* Home */}
      <Route path={`${baseRoute}${homeRoutes.list}`} element={<Dashboard />} />

      {/* Customers */}
      <Route
        path={`${baseRoute}${customersRoutes.list}`}
        element={<Customer />}
      />
      <Route
        path={`${baseRoute}${customersRoutes.new}`}
        element={<Customer isNew />}
      />
      <Route
        path={`${baseRoute}${customersRoutes.edit}`}
        element={<Customer isEdit />}
      />

      {/* Services */}
      <Route
        path={`${baseRoute}${servicesRoutes.list}`}
        element={<Services />}
      />
      <Route
        path={`${baseRoute}${servicesRoutes.new}`}
        element={<Services isNew />}
      />
      <Route
        path={`${baseRoute}${servicesRoutes.edit}`}
        element={<Services isEdit />}
      />

      {/* Errors */}
      <Route path={errorsRoutes.notFound} element={<NotFound />} />
    </Routes>
  );
};
