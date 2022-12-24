import * as yup from "yup";
import { emailRegExp } from "@constants/regexp";
import {
  emailFieldValidMessage,
  emailFieldValidExampleMessage,
  bankFieldValidMessage,
  bankFieldValidExampleMessage,
  phoneNumberFieldValidExampleMessage,
  phoneNumberFieldValidMessage,
  getMinSentance,
  fieldRequiredMessaage,
} from "./../constants/schemaMessages";
import {
  bankAccountMKDRegExp,
  phoneMKDRegExp,
  edbMKDRegExp,
  embsKDRegExp,
  zipCodeMKDRegExp,
} from "../../../constants/regexp";

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

const shortYup = yup.string().trim();

export const newCustomerSchema = yup.object().shape({
  address: shortYup
    .min(ADDRESS_CHARS, addressValidMessage)
    .required(fieldRequiredMessaage),
  email: shortYup
    .email(emailFieldValidMessage)
    .matches(emailRegExp, emailFieldValidExampleMessage)
    .required(fieldRequiredMessaage),
  "bank-account": shortYup
    .optional()
    .length(17, bankFieldValidMessage)
    .matches(bankAccountMKDRegExp, bankFieldValidExampleMessage),
  "company-name": yup.string().required(fieldRequiredMessaage),
  "phone-number": shortYup
    .length(12, phoneNumberFieldValidExampleMessage)
    .matches(phoneMKDRegExp, phoneNumberFieldValidMessage)
    .required(fieldRequiredMessaage),
  edb: shortYup
    .length(EDB_NUMS, edbValidMessage)
    .matches(edbMKDRegExp, edbValidMessage)
    .required(fieldRequiredMessaage),
  embs: shortYup
    .length(EMBS_NUMS, ebmsValidMessage)
    .matches(embsKDRegExp, ebmsValidMessage)
    .required(fieldRequiredMessaage),
  country: shortYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "state-region": shortYup
    .min(COUNTRY_STATE_REGION_CHARS, countryAndStateRegionValidMessage)
    .required(fieldRequiredMessaage),
  "zip-code": shortYup
    .length(ZIP_CODE_NUMS, zipCodeValidMessage)
    .matches(zipCodeMKDRegExp, zipCodeValidMessage)
    .required(fieldRequiredMessaage),
});
