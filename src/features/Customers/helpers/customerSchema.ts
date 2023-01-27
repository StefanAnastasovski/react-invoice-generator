import * as yup from "yup";
import { getMinSentance, shortStringTrimYup } from "@constants/schemaConstants";
import {
  bankAccountMKDRegExp,
  edbMKDRegExp,
  emailRegExp,
  embsKDRegExp,
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
const EDB_NUMS = 13;
const EMBS_NUMS = 6;
const ZIP_CODE_NUMS = 4;

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

const edbValidMessage = getMinSentance({
  fieldName: "EDB",
  noOfCharacters: EDB_NUMS,
  characterOperator: "length",
  isNumber: true,
});
const ebmsValidMessage = getMinSentance({
  fieldName: "EMBS",
  noOfCharacters: EMBS_NUMS,
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
  edb: shortStringTrimYup
    .length(EDB_NUMS, edbValidMessage)
    .matches(edbMKDRegExp, edbValidMessage)
    .required(fieldRequiredMessaage),
  embs: shortStringTrimYup
    .length(EMBS_NUMS, ebmsValidMessage)
    .matches(embsKDRegExp, ebmsValidMessage)
    .required(fieldRequiredMessaage),
  country: shortStringTrimYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "state-region": shortStringTrimYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "zip-code": shortStringTrimYup
    .length(ZIP_CODE_NUMS, zipCodeValidMessage)
    .matches(zipCodeMKDRegExp, zipCodeValidMessage)
    .required(fieldRequiredMessaage),
});
