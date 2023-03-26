import * as yup from "yup";
import {
  shortStringTrimYup,
  shortBooleanYup,
  fieldRequiredMessaage,
  taxFieldValidMessage,
} from "@constants/schemaConstants";

export const invoiceTaxSettingsSchema = yup.object().shape({
  "tax-percentage": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .min(0, taxFieldValidMessage)
    .max(100, taxFieldValidMessage),
  "tax-active": shortBooleanYup,
});
