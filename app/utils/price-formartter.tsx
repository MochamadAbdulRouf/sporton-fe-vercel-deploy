const priceFormatter = (price: number) => {
  const newFormater = Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 3,
  }).format(price);

  return newFormater;
};

export default priceFormatter;
