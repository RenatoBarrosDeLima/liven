export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const sum = (items: any) => {
  return items.reduce(getTotal, 0);
};

export const fractional = (rate = 0) => {
  return rate % 2 != 0;
};

function getTotal(total: number, item: any) {
  return total + item.price * item.quantity;
}
