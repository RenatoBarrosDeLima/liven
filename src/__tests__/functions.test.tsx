import { moneyFormat } from "../helpers/functions";

describe("Functions", () => {
  test("Testando função para formação de moeda para real", () => {
    expect(moneyFormat(1)).toMatch(/1,00/);
  });
});
