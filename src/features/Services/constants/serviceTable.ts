import { TABLE_COMMON_CELL_WIDTH } from "@constants/table";
import { TableServiceProps } from "../types/ServiceTypes";

export const serviceColumns = [
  //   "Image",
  "Service",
  //   "Description",
  //   "Price per unit",
  //   "Price per hour",
  "Price",
  "Tax(%)",
  //   "SKU",
  //   "Category",
  "Actions",
];

export const SERVICE_CELL_WIDTH: { [x: string]: string } = {
  service: "400px",
  description: "200px",
  price: "200px",
  tax: "50px",
  ...TABLE_COMMON_CELL_WIDTH,
};

export const SERVICE_FIELD_MAP: { [x: string]: string } = {
  "service-name": "service",
  "service-description": "description",
  "service-price-unit": "pricePerUnit",
  "service-price-hour": "pricePerHour",
  "service-tax": "tax",
  "service-category": "category",
  "service-sku": "sku",
  image: "image",
};

function createData({
  service,
  description,
  pricePerUnit,
  pricePerHour,
  tax,
  category,
  sku,
  image,
}: TableServiceProps) {
  return {
    service,
    description,
    pricePerUnit,
    pricePerHour,
    tax,
    category,
    sku,
    image,
  };
}

export const serviceMockedRows = [
  createData({
    service: "Optimazing website",
    description: "Optimize SEO on website by using the best practices.",
    pricePerUnit: 0,
    pricePerHour: 25,
    tax: 0,
    category: "SEO",
    sku: "SKU-1111",
    image: {
      path: "",
      lastModified: "",
      lastModifiedDate: "",
      name: "",
      size: 0,
      type: "",
      webkitRelativePath: "",
    },
  }),
  createData({
    service: "Managing FB Ads",
    description:
      "Create Strategy and ads, set up the ad account, optimize the results.",
    pricePerUnit: 200,
    pricePerHour: 0,
    tax: 0,
    category: "Digital Marketing",
    sku: "SKU-2222",
    image: {
      path: "",
      lastModified: "",
      lastModifiedDate: "",
      name: "",
      size: 0,
      type: "",
      webkitRelativePath: "",
    },
  }),
].sort((a, b) => (a.service < b.service ? -1 : 1));
