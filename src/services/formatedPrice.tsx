export const formatedPrice = (price: number) => {
  const formated = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formated;
};
