export const isFileAnImage = (path: string) => {
  const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;
  return imageReg.test(path);
};
