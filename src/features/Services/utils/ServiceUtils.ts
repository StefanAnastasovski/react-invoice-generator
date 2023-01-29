import { PRICE_SIGN } from "../constants/constants";

const returnPrice = (price: number, isPricePerHour: boolean) => {
  const formattedPrice = `${PRICE_SIGN} ${price}`;
  return isPricePerHour
    ? `${formattedPrice} (per hour)`
    : `${formattedPrice} (per unit)`;
};

const getFormattedCollapseData = (collapseData: any) => {
  return {
    titleLeft: collapseData?.info?.title,
    titleRight: collapseData?.pricing?.title,
    collapseDataLeft: collapseData?.info?.items,
    collapseDataRight: collapseData?.pricing?.items,
  };
};

export const getFormattedServiceData = ({ details }: any) => {
  const {
    "service-name": service,
    "service-price-unit": pricePerUnit,
    "service-price-hour": pricePerHour,
    "service-tax": tax,
    // "service-category": category,
    // "service-description": description,
    // "service-sku": sku,
    // "service-image": image,
  } = details;

  const rowId = details["service-sku"];
  const collapseData = getCollapseData(details);
  const formattedCollapseData = getFormattedCollapseData(collapseData);
  const price = pricePerHour
    ? returnPrice(pricePerHour, true)
    : returnPrice(pricePerUnit, false);

  // const serviceName = {
  //   service,
  //   image,
  // };

  const formattedData = [{ service }, { price }, { tax }];

  return {
    formattedData,
    rowId,
    collapseData: formattedCollapseData,
  };
};

const getCollapseData = (data: any) => {
  return {
    pricing: {
      title: "Pricing",
      items: [
        {
          id: "sip-1",
          title: "Price per unit",
          text: data["service-price-unit"],
        },
        {
          id: "sip-2",
          title: "Price per hour",
          text: data["service-price-hour"],
        },
        {
          id: "sip-3",
          title: "Tax(%)",
          text: data["service-tax"],
        },
      ],
    },
    info: {
      title: "Basic Details",
      items: [
        {
          id: "sibd-1",
          title: "Service",
          text: data["service-name"],
        },
        {
          id: "sibd-2",
          title: "Description",
          text: data["service-description"],
        },
        {
          id: "sibd-3",
          title: "Category",
          text: data["service-category"],
        },
        {
          id: "sibd-4",
          title: "SKU",
          text: data["service-sku"],
        },
      ],
    },
  };
};
