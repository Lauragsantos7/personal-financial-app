import { categoriesRevenue } from "../data/CategoriesRevenue";
import { CategoriesRevenueType } from "../types/CategoriesRevenueType";
import { transactions } from "../data/TransactionsData";
import { useState, useEffect } from "react";
import { filterByMonth, getCurrentMonth } from "../utils/dateFilters";
import { TransactionsType } from "../types/TransactionsType";

function Transactions() {
    const [allList, setAllList] = useState(transactions);
    const [filteredList, setFilteredList] = useState<TransactionsType[]>([])

    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth);

    // toda vez que a lista ou o mes corrente atualizar, atualiza o filtro
    useEffect(() => {
        setFilteredList(filterByMonth(allList, currentMonth ))
    }, [allList, currentMonth])

    return(
        <>
        </>
    )
}

export default Transactions