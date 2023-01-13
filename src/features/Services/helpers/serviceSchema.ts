import * as yup from "yup";
import {
  OPERATORS_MAPPED,
  SUPPORTED_IMAGES_FORMAT,
} from "@constants/constants";
import { shortNumberYup, shortStringTrimYup } from "@constants/schemaConstants";
import { skuRegExp } from "@constants/regexp";

// constants
const MIN_NAME_CHARACTERS = 5;
const MIN_DESCRIPTION_CHARACTERS = 10;
const MIN_SKU_LENGTH = 8;
const MAX_SKU_LENGTH = 14;
const SUPPORTED_IMAGE_FORMATS = `".jpeg", ".jpg", ".png", ".svg"`;

// messages
const fieldRequiredMessaage = "The field is required.";
const taxFieldValidMessage = "Please, enter the number between 0 - 100(%).";
const priceFieldRequiredMessage = "Set price for unit or hour.";
const pricePerUnitEnterMessage =
  "Price per unit must be grater than 0, or enter price per hour grater than 0.";
const pricePerHourEnterMessage =
  "Price per hour must be grater than 0, or enter price per unit grater than 0.";
const imageSupportedFormatMessage = `Please upload the image in one of the supported formats: ${SUPPORTED_IMAGE_FORMATS}`;

export const mustBeCharactersMessage = (
  characters: number | string,
  operator: string
) => {
  return `Must be ${OPERATORS_MAPPED[operator]} ${characters}.`;
};

export const serviceSchema = yup.object().shape(
  {
    "service-name": shortStringTrimYup
      .required(fieldRequiredMessaage)
      .min(
        MIN_NAME_CHARACTERS,
        mustBeCharactersMessage(`${MIN_NAME_CHARACTERS} characters`, ">=")
      ),
    "service-description": shortStringTrimYup
      .required(fieldRequiredMessaage)
      .min(
        MIN_DESCRIPTION_CHARACTERS,
        mustBeCharactersMessage(
          `${MIN_DESCRIPTION_CHARACTERS} characters`,
          ">="
        )
      ),
    "service-tax": shortNumberYup
      .min(0, taxFieldValidMessage)
      .max(100, taxFieldValidMessage),
    "service-category": shortStringTrimYup
      .required(fieldRequiredMessaage)
      .min(3, "min"),
    "service-sku": shortStringTrimYup
      .required(fieldRequiredMessaage)
      .min(
        MIN_SKU_LENGTH,
        mustBeCharactersMessage(`${MIN_SKU_LENGTH} characters`, ">=")
      )
      .max(
        MAX_SKU_LENGTH,
        mustBeCharactersMessage(`${MAX_SKU_LENGTH} characters`, "<=")
      )
      .matches(skuRegExp, "example: SKU-1234"),
    "service-image": yup
      .mixed()
      .required(fieldRequiredMessaage)
      .test(
        "fileFormat",
        imageSupportedFormatMessage,
        (file) =>
          Object.keys(file).length > 0 &&
          SUPPORTED_IMAGES_FORMAT.includes(file.type)
      ),
    "service-price-unit": shortNumberYup.when("service-price-hour", {
      is: (pricePerHour: number) => !pricePerHour || pricePerHour === 0,
      then: shortNumberYup
        .required(priceFieldRequiredMessage)
        .positive(pricePerUnitEnterMessage),
    }),
    "service-price-hour": shortNumberYup.when("service-price-unit", {
      is: (pricePerUnit: number) => !pricePerUnit || pricePerUnit === 0,
      then: shortNumberYup
        .required(priceFieldRequiredMessage)
        .positive(pricePerHourEnterMessage),
    }),
  },
  [["service-price-unit", "service-price-hour"]]
);
