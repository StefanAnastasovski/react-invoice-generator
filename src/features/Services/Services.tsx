import React, { useState } from "react";
import { BoxDiv } from "@components/atoms";
import { CONTENT_BUTTON_ACTIONS } from "@constants/constants";
import { AddOrEditService } from "./components/AddOrEditService";
import { ServiceTable } from "./components/ServiceTable";
import { NewServiceProps } from "./types/ServiceProps";
import { servicesRoutes } from "@features/Router/routes";
import { useRouterHook } from "@hooks/useRouterHook";

type ServicesProps = {
  isEdit?: boolean;
  isNew?: boolean;
};

export const Services = ({ isNew = false, isEdit = false }: ServicesProps) => {
  const { params, navigate } = useRouterHook();

  const [serviceList, setServiceList] =
    useState<NewServiceProps[]>(serviceData);

  // const addNewServiceHandler = (newService: any) => {
  //   setServiceList([...serviceList.push(newService)]);
  // };

  const editService = (serviceData: any) => {};

  const handleNewService = () => {};

  const handleEditService = () => {};

  const handleClose = () => {
    navigate(servicesRoutes.list);
  };

  const handleDelete = (id: string | number) => {
    //onClick implement when BE is ready
  };

  const getServiceById = () => {
    const item = serviceData.filter((item) => {
      return item["service-sku"] === params.id;
    });
    return item[0];
  };

  return (
    <BoxDiv>
      {!isNew && !isEdit && <ServiceTable />}

      {isNew && (
        <AddOrEditService
          onClickSecondary={handleClose}
          addNewService={setServiceList}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.ADD}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          serviceData={serviceData}
          isNew={isNew}
        />
      )}

      {isEdit && (
        <AddOrEditService
          onClickSecondary={handleClose}
          editService={editService}
          handleDelete={handleDelete}
          primaryButtonText={CONTENT_BUTTON_ACTIONS.UPDATE}
          secondaryButtonText={CONTENT_BUTTON_ACTIONS.CANCEL}
          deleteButtonText={CONTENT_BUTTON_ACTIONS.DELETE}
          serviceList={[]}
          shouldEdit={isEdit && Boolean(getServiceById())}
          serviceData={getServiceById()}
        />
      )}
    </BoxDiv>
  );
};

const serviceData = [
  {
    "service-name": "Website optimization",
    "service-description": "Optimize your Website or Blog.",
    "service-price-unit": 15,
    "service-price-hour": 0,
    "service-tax": 0,
    "service-category": "SEO",
    "service-sku": "SKU-2222",
    "service-image": {},
  },
  {
    "service-name": "Website optimization",
    "service-description": "Optimize your Website or Blog.",
    "service-price-unit": 15,
    "service-price-hour": 0,
    "service-tax": 0,
    "service-category": "SEO",
    "service-sku": "SKU-1111",
    "service-image": {},
  },
];
