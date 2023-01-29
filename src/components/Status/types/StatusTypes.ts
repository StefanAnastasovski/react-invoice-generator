export interface StatusesProps extends KeyValueStrings {}
export interface StatusComponentProps {
  [prop: string]: StatusStyleProps;
}

export interface KeyValueStrings {
  [x: string]: string;
}

export interface StatusStyleProps {
  backgroundColor: string;
  color: string;
}
