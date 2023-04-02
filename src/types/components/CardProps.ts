import { FormikProps } from "formik";
import { StringNumberObjectProps } from "types/CommonProps";
import { StyleCustomProps } from "types/StyleProps";

export interface CardItemProps {
  id: string;
  label: string;
  name: string;
  type: string;
  dbKey: string;
  isRequired: boolean;
  placeholder?: string;
  items: { [key: string]: string }[] | null;
}

export interface CardItemsProps {
  serviceData: CardItemProps[];
  formik: FormikProps<StringNumberObjectProps>;
  style: StyleCustomProps;
  textAreaProps?: any;
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  serviceData: CardItemProps[] | null;
  formik: FormikProps<any>;
  buttonComponent?: React.ReactNode;
  customStyle?: any; // TODO: fix it
  textAreaProps?: any; // TODO: fix it
}

export interface CardContentProps extends CardProps {
  style: StyleCustomProps;
}
