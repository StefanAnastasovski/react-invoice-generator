import { currencyFieldValidMessage } from "./../../../constants/schemaConstants";
import * as yup from "yup";
import {
  shortStringTrimYup,
  shortBooleanYup,
  fieldRequiredMessaage,
  mustBeCharactersMessage,
  fullNameFieldValidMessage,
} from "@constants/schemaConstants";
import { fullNameRegExp } from "@constants/regexp";
import {
  AVAILABLE_CURRENCIES,
  AVAILABLE_SIGN_CURRENCIES,
} from "@constants/constants";

// constants
const PREFIX_LENGTH = 3;
const MAX_CURRENCY_CHARACTERS = 3;

export const invoiceGeneralSettingsSchema = yup.object().shape({
  currency: shortStringTrimYup
    .required(fieldRequiredMessaage)
    .max(
      MAX_CURRENCY_CHARACTERS,
      mustBeCharactersMessage(`${PREFIX_LENGTH} characters`, "<=")
    )
    .test("Valid Currency", currencyFieldValidMessage, (val: any): boolean => {
      return (
        AVAILABLE_CURRENCIES.includes(val?.toUpperCase()) ||
        AVAILABLE_SIGN_CURRENCIES.includes(val)
      );
    }),
  prefix: shortStringTrimYup
    .required(fieldRequiredMessaage)
    .length(
      PREFIX_LENGTH,
      mustBeCharactersMessage(`${PREFIX_LENGTH} characters`, "=")
    ),
  "digital-name": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .matches(fullNameRegExp, fullNameFieldValidMessage),
  "reset-number": shortBooleanYup,
});
