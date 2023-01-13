import { SxProps } from "@mui/material";

export interface StyleDefaultProps {
  [key: string]: string | number;
}

export interface StyleCustomProps {
  [x: string]:
    | {
        [y: string]: string | number | { [z: string]: string | number };
      }
    | { [z: string]: string | number };
}

export interface StyleSxCSSPropertiesProps {
  [x: string]: React.CSSProperties | SxProps;
}
