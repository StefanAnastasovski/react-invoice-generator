import React from "react";
import { StyleCustomProps, StyleDefaultProps } from "./StyleProps";

export interface ChildrenProps {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties | StyleCustomProps | StyleDefaultProps;
}
