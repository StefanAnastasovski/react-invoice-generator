import * as yup from "yup";
import {
  addressValidMessage,
  cinValidMessage,
  countryAndStateRegionValidMessage,
  emailFieldValidExampleMessage,
  phoneNumberFieldValidExampleMessage,
  phoneNumberFieldValidMessage,
  shortStringTrimYup,
  tinValidMessage,
  zipCodeValidMessage,
  bankFieldValidMessage,
  websiteFieldValidMessage,
  bankFieldValidExampleMessage,
  fieldRequiredMessaage,
  mustBeCharactersMessage,
} from "@constants/schemaConstants";
import {
  bankAccountMKDRegExp,
  cinMKDRegExp,
  tinKDRegExp,
  emailRegExp,
  phoneMKDRegExp,
  websiteRegExp,
  zipCodeMKDRegExp,
} from "@constants/regexp";

// constants
const MIN_NAME_CHARACTERS = 2;
const CIN_LENGTH = 13;
const TIN_LENGTH = 7;
const PHONE_NUMBER_LENGTH = 12;
const ZIP_CODE_LENGTH = 4;
const BANK_ACCOUNT_LENGTH = 17;
const MIN_ADDRESS_CHARS = 5;
const MIN_COUNTRY_AND_CITY_CHARS = 3;

export const invoiceSchema = yup.object().shape({
  "company-name": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .min(
      MIN_NAME_CHARACTERS,
      mustBeCharactersMessage(`${MIN_NAME_CHARACTERS} characters`, ">=")
    ),
  cin: shortStringTrimYup
    .length(CIN_LENGTH, cinValidMessage(CIN_LENGTH))
    .matches(cinMKDRegExp, cinValidMessage(CIN_LENGTH))
    .required(fieldRequiredMessaage),
  tin: shortStringTrimYup
    .length(TIN_LENGTH, tinValidMessage(TIN_LENGTH))
    .matches(tinKDRegExp, tinValidMessage(TIN_LENGTH))
    .required(fieldRequiredMessaage),
  address: shortStringTrimYup
    .min(MIN_ADDRESS_CHARS, addressValidMessage(MIN_ADDRESS_CHARS))
    .required(fieldRequiredMessaage),
  country: shortStringTrimYup
    .min(
      MIN_COUNTRY_AND_CITY_CHARS,
      countryAndStateRegionValidMessage(MIN_COUNTRY_AND_CITY_CHARS)
    )
    .required(fieldRequiredMessaage),
  city: shortStringTrimYup
    .required(fieldRequiredMessaage)
    .min(
      MIN_COUNTRY_AND_CITY_CHARS,
      countryAndStateRegionValidMessage(MIN_COUNTRY_AND_CITY_CHARS)
    ),
  "zip-code": shortStringTrimYup
    .length(ZIP_CODE_LENGTH, zipCodeValidMessage(ZIP_CODE_LENGTH))
    .matches(zipCodeMKDRegExp, zipCodeValidMessage(ZIP_CODE_LENGTH))
    .required(fieldRequiredMessaage),
  "phone-number": shortStringTrimYup
    .length(PHONE_NUMBER_LENGTH, phoneNumberFieldValidExampleMessage)
    .matches(phoneMKDRegExp, phoneNumberFieldValidMessage)
    .required(fieldRequiredMessaage),
  email: shortStringTrimYup
    .email(emailFieldValidExampleMessage)
    .matches(emailRegExp, emailFieldValidExampleMessage)
    .required(fieldRequiredMessaage),
  website: shortStringTrimYup
    .matches(websiteRegExp, websiteFieldValidMessage)
    .required(fieldRequiredMessaage),
  "bank-name": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .min(
      MIN_NAME_CHARACTERS,
      mustBeCharactersMessage(`${MIN_NAME_CHARACTERS} characters`, ">=")
    ),
  "bank-account": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .length(BANK_ACCOUNT_LENGTH, bankFieldValidMessage)
    .matches(bankAccountMKDRegExp, bankFieldValidExampleMessage),
});
