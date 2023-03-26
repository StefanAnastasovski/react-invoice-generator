import * as yup from "yup";
import {
  OPERATORS_CHARACTERS,
  OPERATORS_MAPPED,
  SUPPORTED_IMAGE_FORMATS,
} from "./constants";
import { NewCustomerSchemaMessageProps } from "@features/Customers/types/CustomerTypes";

const numberFieldValidMessage = "Please enter a valid number.";

export const shortStringYup = yup.string();
export const shortStringTrimYup = yup.string().trim();
export const shortBooleanYup = yup.boolean();
export const shortNumberYup = yup.number().typeError(numberFieldValidMessage);

export const mustBeCharactersMessage = (
  characters: number | string,
  operator: string
) => {
  return `Must be ${OPERATORS_MAPPED[operator]} ${characters}.`;
};

export const getMinSentance = ({
  fieldName,
  noOfCharacters,
  characterOperator,
  isNumber = false,
}: NewCustomerSchemaMessageProps) => {
  return `${fieldName.toUpperCase()}  must be ${
    OPERATORS_CHARACTERS[characterOperator.toUpperCase()]
  } ${noOfCharacters} ${isNumber ? "numbers" : "characters"}`;
};

/**
 * fileType: eg: an image
 * fileFormats: eg: .jpg, .png
 */
export const generateImageSupportedFormatMessage = (
  fileType: string,
  fileFormats: string
) => {
  return `Please upload ${fileType} in one of the supported formats: ${fileFormats}`;
};

// messages
export const addressValidMessage = (noOfCharacters: number) =>
  getMinSentance({
    fieldName: "Address",
    noOfCharacters: noOfCharacters,
    characterOperator: "min",
  });

export const countryAndStateRegionValidMessage = (noOfCharacters: number) =>
  getMinSentance({
    fieldName: "Country",
    noOfCharacters: noOfCharacters,
    characterOperator: "min",
  });

export const cinValidMessage = (noOfCharacters: number, isNumber?: boolean) =>
  getMinSentance({
    fieldName: "CIN",
    noOfCharacters: noOfCharacters,
    characterOperator: "length",
    isNumber: isNumber || false,
  });
export const tinValidMessage = (noOfCharacters: number, isNumber?: boolean) =>
  getMinSentance({
    fieldName: "TIN",
    noOfCharacters: noOfCharacters,
    characterOperator: "length",
    isNumber: isNumber || false,
  });
export const zipCodeValidMessage = (
  noOfCharacters: number,
  isNumber?: boolean
) =>
  getMinSentance({
    fieldName: "Zip Code",
    noOfCharacters: noOfCharacters,
    characterOperator: "length",
    isNumber: isNumber || false,
  });

export const fieldRequiredMessaage = "The field is required.";
export const emailFieldValidExampleMessage =
  "Email must be a valid email address. mail@example.com";
export const phoneNumberFieldValidExampleMessage =
  "The phone number must start with +389 and have 8 digits.";
export const phoneNumberFieldValidMessage = "Phone number is not valid.";
export const websiteFieldValidMessage = "Website is not valid.";
export const bankFieldValidMessage = "Bank Account must be XXX-XXXXXXXXXX-XX";
export const bankFieldValidExampleMessage =
  'Bank Account must be XXX-XXXXXXXXXX-XX, please check for "-"';
export const fullNameFieldValidMessage = "Enter a valid full name.";
export const currencyFieldValidMessage =
  "Please Enter a valid currency. eg: USD, MKD, $, €, etc.";
export const taxFieldValidMessage =
  "Please, enter a number between 0 and  100(%).";
export const priceFieldRequiredMessage = "Set price for unit or hour.";
export const pricePerUnitEnterMessage =
  "Price per unit must be grater than 0, or enter price per hour grater than 0.";
export const pricePerHourEnterMessage =
  "Price per hour must be grater than 0, or enter price per unit grater than 0.";
export const imageSupportedFormatMessage = `Please upload an image in one of the supported formats: ${SUPPORTED_IMAGE_FORMATS}`;
