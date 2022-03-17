export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const fractional = (rate = 0) => {
  return rate % 2 != 0;
};
