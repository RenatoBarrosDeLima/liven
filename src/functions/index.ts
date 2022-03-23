// Função que converte um número em moeda Real brasileiro
export const moneyFormat = (value = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

// Função que faz o somatório dos preços de uma lista, levando em consideração a quantidade de items da lista
export const sum = (items: any) => {
  return items.reduce(getTotal, 0);
};

// Função que verifica se um número é fracionário ou não
export const fractional = (rate = 0) => {
  return rate % 2 != 0;
};

// Função que multiplica o preço pela quantidade e guarda o total
function getTotal(total: number, item: any) {
  return total + item.price * item.quantity;
}
