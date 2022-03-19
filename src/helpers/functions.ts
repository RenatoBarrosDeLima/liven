export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const sum = (items: any) => {
  const sum = items
    .map((x: any) => x.price)
    .reduce((a: number, b: number) => a + b, 0);

  return sum;
};

export const fractional = (rate = 0) => {
  return rate % 2 != 0;
};
