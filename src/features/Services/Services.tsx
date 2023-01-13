import React, { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { CustomButton } from "@components/atoms/Buttons";
import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { AddOrEditService } from "./components/AddOrEditService";
import { ServiceTable } from "./components/ServiceTable";
import { NewServiceProps } from "./types/ServiceProps";

const BUTTON_CONTENT = {
  ADD_BUTTON: "Add a New Service",
  EDIT_BUTTON: "Edit Service",
};

export const Services = () => {
  const [isAddNewService, setIsAddNewService] = useState(false);
  const [isEditService, setIsEditService] = useState(false);

  const [serviceList, setServiceList] =
    useState<NewServiceProps[]>(serviceData);

  // const addNewServiceHandler = (newService: any) => {
  //   setServiceList([...serviceList.push(newService)]);
  // };

  const editService = (customerData: any) => {
    console.log(isEditService);
    console.log(customerData);
  };

  const handleNewService = () => {
    setIsEditService(false);
    setIsAddNewService(!isAddNewService);
  };

  const handleEditCustomer = () => {
    setIsAddNewService(false);
    setIsEditService(!isEditService);
  };

  const handleClose = () => {
    setIsAddNewService(false);
    setIsEditService(false);
  };

  const handleDelete = (value: string | number) => {
    //onClick implement when BE is ready
    console.log("Handle Delete");
    console.log(value);
  };

  return (
    <BoxDiv>
      <ServiceTable />

      {!isAddNewService ? (
        <CustomButton
          style={styles.openNewCustomerButton}
          size="medium"
          onClick={handleNewService}
        >
          {BUTTON_CONTENT.ADD_BUTTON}
        </CustomButton>
      ) : (
        <AddOrEditService
          onClickSecondary={handleClose}
          addNewService={setServiceList}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.ADD}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          serviceData={serviceData}
        />
      )}

      {!isEditService ? (
        <CustomButton
          style={styles.openNewCustomerButton}
          size="medium"
          onClick={handleEditCustomer}
        >
          {BUTTON_CONTENT.EDIT_BUTTON}
        </CustomButton>
      ) : (
        <AddOrEditService
          onClickSecondary={handleClose}
          editService={editService}
          handleDelete={handleDelete}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          deleteButtonText={CONTENT_BUTTON_ACTIONS.DELETE}
          serviceList={serviceList}
          shouldEdit={true}
          serviceData={existingServiceData}
        />
      )}
    </BoxDiv>
  );
};

const styles = {
  openNewCustomerButton: {
    fontWeight: 800,
    padding: "0.5em 2em",
  },
};

const serviceData = [
  {
    "service-name": "Website optimization",
    "service-description": "Optimize your Website or Blog.",
    "service-price-unit": 15,
    "service-price-hour": 0,
    "service-tax": 0,
    "service-category": "SEO",
    "service-sku": "OLD-1111",
    "service-image": {},
  },
  {
    "service-name": "Website optimization",
    "service-description": "Optimize your Website or Blog.",
    "service-price-unit": 15,
    "service-price-hour": 0,
    "service-tax": 0,
    "service-category": "SEO",
    "service-sku": "OLD-1111",
    "service-image": {},
  },
];

// TODO: remove after BE implementation
const existingServiceData = {
  "service-name": "Website optimization",
  "service-description": "Optimize your Website or Blog.",
  "service-price-unit": 15,
  "service-price-hour": 0,
  "service-tax": 0,
  "service-category": "SEO",
  "service-sku": "OLD-1111",
  "service-image": {},
};
