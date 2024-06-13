import { Dispatch, ReactNode } from "react";
import { IPartners } from "../../interface/IPartners";

export type FilterContextType = {
    loading:boolean;
    setLoading:Dispatch<React.SetStateAction<boolean>>;
    visible:boolean;
    setVisible:Dispatch<React.SetStateAction<boolean>>;
    selectedId:string;
    setSelectedId:Dispatch<React.SetStateAction<string>>;
    isFiltred:boolean;
    setIsFiltred:Dispatch<React.SetStateAction<boolean>>;
    handleFilter: () => void;
    handleClearFilter:() => void;
};

export type FilterContextProviderProps = {
    children:ReactNode;
}

export type ResponseGetAllPartners = {
    data:IPartners[];
};

export type ResponsePartners = {
    data:IPartners;
};