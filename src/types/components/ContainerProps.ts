export type ContainerProps = {
  children: React.ReactNode;
  justifyContent?: string;
  alignItems?: string;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
  containerStyle?: any;
  restProps?: any;
};
