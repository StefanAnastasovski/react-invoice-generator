import { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { CustomButton } from "@components/atoms/Buttons";
import { CustomerTable } from "./components/CustomerTable";
import { NewCustomerProps } from "./types/NewCustomerTypes";
import { AddNewOrEditCustomer } from "./components/AddNewOrEditCustomer";

// TODO: remove after BE implementation
const existingCustomerData = {
  address: "dadadadaa",
  "bank-account": "111-1111111111-11",
  "company-name": "dadadadada",
  country: "dadadad",
  edb: "1111111111111",
  email: "dasdakod@gmail.com",
  embs: "111111",
  "phone-number": "+38977222222",
  "state-region": "dadadad",
  "zip-code": "1300",
};

const BUTTON_ACTIONS = {
  ADD: "Add",
  UPDATE: "Update",
  CANCEL: "Cancel",
  DELETE: "Delete",
};

export const Customer = () => {
  const [isAddNewCustomer, setIsAddNewCustomer] = useState(false);
  const [isEditCustomer, setIsEditCustomer] = useState(false);

  const [customerList, setCustomerList] =
    useState<NewCustomerProps[]>(customerData);

  // const addNewCustomerHandler = (newCustomer: any) => {
  //   setCustomerList([...customerList.push(newCustomer)]);
  // };

  const editCustomer = (customerData: any) => {
    console.log(editCustomer);
    console.log(customerData);
  };

  const handleNewCustomer = () => {
    setIsEditCustomer(false);
    setIsAddNewCustomer(!isAddNewCustomer);
  };

  const handleEditCustomer = () => {
    setIsAddNewCustomer(false);
    setIsEditCustomer(!isEditCustomer);
  };

  const handleClose = () => {
    setIsAddNewCustomer(false);
    setIsEditCustomer(false);
  };

  const handleDelete = (edb: string | number) => {
    //onClick implement when BE is ready
    console.log("Handle Delete");
    console.log(edb);
  };

  return (
    // TODO: implement logic here, this is just for test
    <BoxDiv>
      {!isAddNewCustomer ? (
        <CustomButton
          style={styles.openNewCustomerButton}
          size="medium"
          onClick={handleNewCustomer}
        >
          Add a New Customer
        </CustomButton>
      ) : (
        <AddNewOrEditCustomer
          onClickSecondary={handleClose}
          addNewCustomer={setCustomerList}
          primaryButtonText={BUTTON_ACTIONS.ADD}
          secondaryButtonText={BUTTON_ACTIONS.CANCEL}
          customerList={customerList}
        />
      )}

      {!isEditCustomer ? (
        <CustomButton
          style={styles.openNewCustomerButton}
          size="medium"
          onClick={handleEditCustomer}
        >
          Edit Customer
        </CustomButton>
      ) : (
        <AddNewOrEditCustomer
          onClickSecondary={handleClose}
          editCustomer={editCustomer}
          handleDelete={handleDelete}
          primaryButtonText={BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={BUTTON_ACTIONS.CANCEL}
          deleteButtonText={BUTTON_ACTIONS.DELETE}
          customerList={customerList}
          shouldEditCustomer={true}
          customerData={existingCustomerData}
        />
      )}
      <CustomerTable />
    </BoxDiv>
  );
};

const styles = {
  openNewCustomerButton: {
    fontWeight: 800,
    padding: "0.5em 2em",
  },
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
    edb: "1111111111111",
    embs: "111111",
    country: "Macedonia",
    "state-region": "Kumanovo",
    "zip-code": "1300",
  },
];
