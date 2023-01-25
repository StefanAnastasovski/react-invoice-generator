import React from "react";

export const useMakeTableComponent = (props: any) => {
  const { tableComponent, ...restProps } = props;
  if (+Object.keys(restProps) === 0) {
    return;
  }
  return React.createElement(tableComponent, {
    ...restProps,
  });
};
