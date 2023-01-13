import * as yup from "yup";
import { OPERATORS_CHARACTERS, OPERATORS_MAPPED } from "./constants";
import { NewCustomerSchemaMessageProps } from "@features/Customer/types/NewCustomerTypes";

const numberFieldValidMessage = "Please enter a valid number.";

export const shortStringYup = yup.string();
export const shortStringTrimYup = yup.string().trim();
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
    OPERATORS_CHARACTERS[characterOperator]
  } ${noOfCharacters} ${isNumber ? "numbers" : "characters"}`;
};
