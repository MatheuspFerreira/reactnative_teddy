import { useState } from "react";

  
const numberOfItemsPerPageList = [3, 4, 5];

type PaginateType<T> = {
    items:T[],
    page:number,
    itemsPerPage:number;
}

type Indicators = {
    to: number;
    numberOfPages: number;
    label: string;
};

export function usePagination () {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
    const from = page * numberOfItemsPerPage;


    const handleOnItemsPerPageChange = (value:number) => {
        onItemsPerPageChange(value);
        setPage(0);
    }

    const handlePaginate = <T>({ items, page, itemsPerPage }: PaginateType<T>): T[] => {
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        return items.slice(start, end);
    };

    const getIndicators = <T>(items: T[]): Indicators => {
        const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
        const from = page * numberOfItemsPerPage;
        const numberOfPages = Math.ceil(items.length / numberOfItemsPerPage);
        const label = `${from + 1}-${to} de ${items.length}`;
    
        return {
            to,
            numberOfPages,
            label
        };
    };
      


    return {
        page,
        setPage,
        getIndicators,
        numberOfItemsPerPageList,
        numberOfItemsPerPage,
        handleOnItemsPerPageChange,
        handlePaginate
        
    }
}