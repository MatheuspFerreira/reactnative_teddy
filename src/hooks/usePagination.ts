import { useState } from "react";
import { usePartnersContext } from "../context/PartnersContext";

  
const numberOfItemsPerPageList = [3, 4, 5];

type PaginateType<T> = {
    items:T[],
    page:number,
    itemsPerPage:number;

}

export function usePagination () {
    const [page, setPage] = useState(0);
    const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
    const { partners } = usePartnersContext();
    const from = page * numberOfItemsPerPage;
    const to = Math.min((page + 1) * numberOfItemsPerPage, partners.length);
    const numberOfPages= Math.ceil(partners.length / numberOfItemsPerPage)
    const label=`${from + 1}-${to} de ${partners.length}`

    const handleOnItemsPerPageChange = (value:number) => {
        onItemsPerPageChange(value);
        setPage(0);
    }

    const handlePaginate = <T>({ items, page, itemsPerPage }: PaginateType<T>): T[] => {
        const start = page * itemsPerPage;
        const end = start + itemsPerPage;
        return items.slice(start, end);
    };
      


    return {
        page,
        setPage,
        numberOfPages,
        label,
        numberOfItemsPerPageList,
        numberOfItemsPerPage,
        handleOnItemsPerPageChange,
        handlePaginate
        
    }
}