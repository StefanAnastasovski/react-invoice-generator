export const DRAWER_WIDTH = 280; //px
export const HEADER_MIN_HEIGHT = 60; //px

type ObjectStringProps = { [x: string]: string };

export const FORM_METHODS: ObjectStringProps = {
  PATCH: "PATCH",
  PUT: "PUT",
  GET: "GET",
  POST: "POST",
};

export const CONTENT_BUTTON_ACTIONS: ObjectStringProps = {
  ADD: "Add",
  UPDATE: "Update",
  CANCEL: "Cancel",
  DELETE: "Delete",
  CREATE: "Create",
};

export const SUPPORTED_IMAGES_FORMAT: string[] = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/svg+xml",
];

export const OPERATORS_MAPPED: ObjectStringProps = {
  ">": "greater than",
  ">=": "greater or equal to",
  "<": "less than",
  "<=": "less or equal to",
  "=": "equal to",
};

export const OPERATORS_CHARACTERS: ObjectStringProps = {
  LENGTH: "exactly",
  MIN: "at least",
  MAX: "maximum",
};

export const AVAILABLE_CURRENCIES = ["USD", "MKD", "DIN"];
export const AVAILABLE_SIGN_CURRENCIES = ["$", "€"];
export const SUPPORTED_IMAGE_FORMATS = `".jpeg", ".jpg", ".png", ".svg"`;

export const MAPPED_FIELD_TYPES = {
  textarea: "textarea",
  checkbox: "checkbox",
};
