export type CategoriesExpensetype = {
    [tag: string]: { // para aceitar várias categorias
        title: string;
        color: string;
        expense: boolean;
    }
}