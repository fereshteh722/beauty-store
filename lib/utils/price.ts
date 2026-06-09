export const formatPrice = (price: number) => price.toLocaleString("fa-IR");

export const calculateDiscountedPrice = (price: number, discount?: number) => {
  if (!discount || discount <= 0) return price;
  return Math.round(price * (1 - discount / 100));
};
