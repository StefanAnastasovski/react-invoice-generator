import { NewCustomerSchemaMessageProps } from "../types/NewCustomerTypes";

export const fieldRequiredMessaage = "The field is required.";
export const emailFieldValidMessage = "Email must be a valid email address.";
export const emailFieldValidExampleMessage =
  "Email must be a valid email address. mail@example.com";
export const bankFieldValidMessage = "Bank Account must be XXX-XXXXXXXXXX-XX";
export const bankFieldValidExampleMessage =
  'Bank Account must be XXX-XXXXXXXXXX-XX, please check for "-"';
export const phoneNumberFieldValidExampleMessage =
  "The phone number must start with +389 and have 8 digits.";
export const phoneNumberFieldValidMessage = "Phone number is not valid.";

export const CHARACTERS_OPERATORS = {
  length: "exactly",
  min: "at least",
  max: "maximum",
};

export const getMinSentance = ({
  fieldName,
  noOfCharacters,
  characterOperator,
  isNumber = false,
}: NewCustomerSchemaMessageProps) => {
  return `${fieldName.toUpperCase()}  must be ${
    CHARACTERS_OPERATORS[characterOperator]
  } ${noOfCharacters} ${isNumber ? "numbers" : "characters"}`;
};
