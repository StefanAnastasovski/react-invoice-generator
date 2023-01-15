import { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { CustomerTable } from "./components/CustomerTable";
import { NewCustomerProps } from "./types/NewCustomerTypes";
import { AddOrEditCustomer } from "./components/AddOrEditCustomer";
import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { customersRoutes } from "@features/Router/routes";
import { useRouterHook } from "@hooks/useRouterHook";

type CustomerProps = {
  isEdit?: boolean;
  isNew?: boolean;
};

export const Customer = ({ isEdit = false, isNew = false }: CustomerProps) => {
  const { params, navigate } = useRouterHook();
  const [customerList, setCustomerList] =
    useState<NewCustomerProps[]>(customerData);

  // const addNewCustomerHandler = (newCustomer: any) => {
  //   setCustomerList([...customerList.push(newCustomer)]);
  // };

  const editCustomer = (customerData: any) => {};

  const handleNewCustomer = () => {};

  const handleEditCustomer = () => {};

  const handleClose = () => {
    navigate(customersRoutes.list);
  };

  const handleDelete = (id: string | number) => {
    //onClick implement when BE is ready
  };

  const getCustomerById = () => {
    const item = customerData.filter((item) => {
      return item.edb === params.id;
    });
    return item[0];
  };

  return (
    // TODO: implement logic here, this is just for test
    <BoxDiv>
      {!isEdit && !isNew && <CustomerTable />}

      {isNew && (
        <AddOrEditCustomer
          onClickSecondary={handleClose}
          addNewCustomer={setCustomerList}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.ADD}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          customerList={customerList}
          isNew={isNew}
        />
      )}

      {isEdit && (
        <AddOrEditCustomer
          onClickSecondary={handleClose}
          editCustomer={editCustomer}
          handleDelete={handleDelete}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          deleteButtonText={CONTENT_BUTTON_ACTIONS.DELETE}
          customerList={[]}
          shouldEdit={isEdit && Boolean(getCustomerById())}
          customerData={getCustomerById()}
        />
      )}
    </BoxDiv>
  );
};

const customerData = [
  {
    address: "st. JNA no. 64",
    email: "testemail@example.com",
    "bank-account": "111-1111111111-11",
    "company-name": "Awesome Company, LLC",
    "phone-number": "+38977886262",
    edb: "1111111111111",
    embs: "111111",
    country: "Macedonia",
    "state-region": "Kumanovo",
    "zip-code": "1300",
  },
  {
    address: "st. JNA no. 64",
    email: "testemail@example.com",
    "bank-account": "111-1111111111-11",
    "company-name": "Awesome Company, LLC",
    "phone-number": "+38977886262",
    edb: "1111111111112",
    embs: "111111",
    country: "Macedonia",
    "state-region": "Kumanovo",
    "zip-code": "1300",
  },
];
