import { createContext, useContext, useState } from "react";
import { useLoading } from "../hooks/useLoading";
import { useModal } from "../hooks/useModal";

import { handleApiError } from "../utils/helpers/handleApiError";
import { useIsConnected } from "../hooks/useIsConnected";
import { Alert } from "react-native";
import { sortByIdDesc } from "../utils/helpers/sortByIdDesc";
import { FilterContextProviderProps, FilterContextType } from "./types/PartnersFilterContext";
import { useCompaniesContext } from "./CompaniesContext";
import { filterCompaniesByID } from "../api/companies/filterById-companies";
import { ResponseCompanies, ResponseCompaniesType } from "./types/CompaniesContext";
import { getAllCompanies } from "../api/companies/getAll-companies";



export const CompaniesFilterContext = createContext<FilterContextType | null>(null);

export function CompaniesFilterContextProvider({
  children
}: FilterContextProviderProps) {
    const [selectedId, setSelectedId] = useState("");
    const [isFiltred, setIsFiltred] = useState(false);
    const { loading, setLoading } = useLoading();
    const { visible, setVisible } = useModal();
    const { setCompanies } = useCompaniesContext();

    const handleFilter = async () => {
        try {

            setLoading(true);

            const verifyID = handleVerifyID();
            if(!verifyID) return;
            
            const isConnected = await useIsConnected("Você precisa estar conectado a uma rede para usar o filtro.");

            if(!isConnected) {
                setVisible(false);
                setLoading(false);

                return;
            };

            const response = await filterCompaniesByID(selectedId);

            const { data }:ResponseCompanies = response;

            setCompanies([data]);
            setIsFiltred(true);
            
        } catch (error) {
            handleApiError({error, title:"Busca"});
        }finally {
          setLoading(false);
          setVisible(false);
        }
    };

    const handleVerifyID = ():boolean => {
        if(selectedId) return true;

        Alert.alert('Campo Obrigatório','Você precisa informar o ID da empresa para buscar.',[{text:'Ok'}]);

        return false;
    };

    const handleClearFilter = async () => {
        try {
            setLoading(true);

            const isConnected = await useIsConnected("Ao limpar o filtro você está buscando todas as empresas, você precisa estar online.");

            if(!isConnected) {
                setVisible(false);
                setLoading(false);

                return;
            };
            const response = await getAllCompanies();

            const { data }:ResponseCompaniesType = response;

            const sortById = sortByIdDesc(data);

            setCompanies(sortById);
            setIsFiltred(false);
            
        } catch (error) {
            handleApiError({error, title:"Erro ao buscar a lista de empresas."});
        }finally{
            setLoading(false);
            setVisible(false);
            setSelectedId("");
        };
    };
  
  return (
    <CompaniesFilterContext.Provider value={{ selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter , handleClearFilter}}>
      {children}
    </CompaniesFilterContext.Provider>
  );
}


export function useCompaniesFilterContext() {
  const context = useContext(CompaniesFilterContext);
  
  if(!context){
    throw new Error("Erro ao acessar o contexto CompaniesFilterContext.");
  };

  const { selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter, handleClearFilter} = context;

  return { selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter, handleClearFilter};
}

