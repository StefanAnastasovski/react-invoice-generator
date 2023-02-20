export const joinStyles = (arrayStyles: any) => {
  return arrayStyles.reduce((acc: any, currentStyle: any) => {
    return { ...acc, ...currentStyle };
  }, {});
};

export const verticalMargins = (value: string | number) => {
  return {
    marginTop: value,
    marginBottom: value,
  };
};
export const horizontalMargins = (value: string | number) => {
  return {
    marginRight: value,
    marginLeft: value,
  };
};

export const verticalPaddings = (value: string | number) => {
  return {
    paddingTop: value,
    paddingBottom: value,
  };
};
export const horizontalPaddings = (value: string | number) => {
  return {
    paddingRight: value,
    paddingLeft: value,
  };
};
