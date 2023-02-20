export const getZipCityCountry = ({
  zipCode,
  city,
  country,
}: {
  [x: string]: string;
}) => {
  return `${zipCode} ${city}, ${country}`;
};

export const calculateTotalAmount = ({
  itemRate,
  quantity,
  discount,
}: {
  itemRate: number;
  quantity: number;
  discount: number;
}) => {
  const amountWithoutDiscount = +itemRate * +quantity;
  const discountAmount = amountWithoutDiscount * (discount / 100);
  return amountWithoutDiscount - discountAmount;
};
