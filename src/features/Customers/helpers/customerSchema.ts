import * as yup from "yup";
import { getMinSentance, shortStringTrimYup } from "@constants/schemaConstants";
import {
  bankAccountMKDRegExp,
  cinMKDRegExp,
  tinKDRegExp,
  emailRegExp,
  phoneMKDRegExp,
  zipCodeMKDRegExp,
} from "@constants/regexp";
import {
  emailFieldValidMessage,
  emailFieldValidExampleMessage,
  bankFieldValidMessage,
  bankFieldValidExampleMessage,
  phoneNumberFieldValidExampleMessage,
  phoneNumberFieldValidMessage,
  fieldRequiredMessaage,
} from "../constants/schemaMessages";

// constants
const ADDRESS_CHARS = 5;
const COUNTRY_STATE_REGION_CHARS = 3;
const CIN_LENGTH = 13;
const TIN_LENGTH = 6;
const ZIP_CODE_LENGTH = 4;

// messages
const addressValidMessage = getMinSentance({
  fieldName: "Address",
  noOfCharacters: ADDRESS_CHARS,
  characterOperator: "min",
});
const countryAndStateRegionValidMessage = getMinSentance({
  fieldName: "Country",
  noOfCharacters: 3,
  characterOperator: "min",
});

const cinValidMessage = getMinSentance({
  fieldName: "CIN",
  noOfCharacters: CIN_LENGTH,
  characterOperator: "length",
  isNumber: true,
});
const tinValidMessage = getMinSentance({
  fieldName: "TIN",
  noOfCharacters: TIN_LENGTH,
  characterOperator: "length",
  isNumber: true,
});
const zipCodeValidMessage = getMinSentance({
  fieldName: "Zip Code",
  noOfCharacters: 4,
  characterOperator: "length",
  isNumber: true,
});

export const customerSchema = yup.object().shape({
  address: shortStringTrimYup
    .min(ADDRESS_CHARS, addressValidMessage)
    .required(fieldRequiredMessaage),
  email: shortStringTrimYup
    .email(emailFieldValidMessage)
    .matches(emailRegExp, emailFieldValidExampleMessage)
    .required(fieldRequiredMessaage),
  "bank-account": shortStringTrimYup
    .optional()
    .length(17, bankFieldValidMessage)
    .matches(bankAccountMKDRegExp, bankFieldValidExampleMessage),
  "company-name": yup.string().required(fieldRequiredMessaage),
  "phone-number": shortStringTrimYup
    .length(12, phoneNumberFieldValidExampleMessage)
    .matches(phoneMKDRegExp, phoneNumberFieldValidMessage)
    .required(fieldRequiredMessaage),
  cin: shortStringTrimYup
    .length(CIN_LENGTH, cinValidMessage)
    .matches(cinMKDRegExp, cinValidMessage)
    .required(fieldRequiredMessaage),
  tin: shortStringTrimYup
    .length(TIN_LENGTH, tinValidMessage)
    .matches(tinKDRegExp, tinValidMessage)
    .required(fieldRequiredMessaage),
  country: shortStringTrimYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "state-region": shortStringTrimYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "zip-code": shortStringTrimYup
    .length(ZIP_CODE_LENGTH, zipCodeValidMessage)
    .matches(zipCodeMKDRegExp, zipCodeValidMessage)
    .required(fieldRequiredMessaage),
});
