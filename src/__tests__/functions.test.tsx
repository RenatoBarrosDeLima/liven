import { moneyFormat, fractional, sum } from "../functions";

describe("Functions", () => {
  test("Testando função (moneyFormat) para formação de moeda para real", () => {
    expect(moneyFormat(1)).toMatch(/1,00/);
  });

  test("Testando função (moneyFormat) para formação de moeda para real", () => {
    expect(moneyFormat(9)).toMatch(/9,00/);
  });

  test("Testando função (fractional) para saber se um número é fracionário, teste ÍMPAR", () => {
    expect(fractional(1)).toBe(true);
  });

  test("Testando função (fractional) para saber se um número é fracionário, teste PAR", () => {
    expect(fractional(2)).toBe(false);
  });

  test("Testando função (sum) para retornar o somatório do preço da lista", () => {
    expect(sum([{ price: 15.3, quantity: 2 }])).toBe(30.6);
  });

  test("Testando função (sum) para retornar o somatório do preço da lista", () => {
    expect(
      sum([
        { price: 22.3, quantity: 2 },
        { price: 15.3, quantity: 3 },
      ])
    ).toBe(90.5);
  });

  test("Testando função (sum) para retornar o somatório do preço da lista", () => {
    expect(
      sum([
        { price: 22.3, quantity: 2 },
        { price: 15.3, quantity: 3 },
      ])
    ).toBe(90.5);
  });
});
