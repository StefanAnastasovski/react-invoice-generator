export const returnFirstLettersFromName = (fullname: string) =>
  fullname
    .split(" ")
    .map((word) => {
      return word[0];
    })
    .join("");
