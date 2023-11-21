import { TransactionsType } from "../types/TransactionsType";

export const getCurrentMonth = () => {
  const currentMonth = new Date();
  return `${currentMonth.getMonth() + 1}-${currentMonth.getFullYear()}`;
};

// filtrar o mês:
export const filterByMonth = (
  list: TransactionsType[],
  date: string
): TransactionsType[] => {
  const newList: TransactionsType[] = [];
  const [month, year] = date.split("-");

  for (const i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
        newList.push(list[i])
    }
  }

  return newList;
};
