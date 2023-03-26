import * as yup from "yup";
import {
  shortStringTrimYup,
  fieldRequiredMessaage,
  mustBeCharactersMessage,
} from "@constants/schemaConstants";

// constants
const MIN_NAME_CHARACTERS = 10;

export const invoiceNotesSchema = yup.object().shape({
  "invoice-note": shortStringTrimYup
    .required(fieldRequiredMessaage)
    .min(
      MIN_NAME_CHARACTERS,
      mustBeCharactersMessage(`${MIN_NAME_CHARACTERS} characters`, ">=")
    ),
});
