import { createContext, useContext, useState } from "react";
import { useLoading } from "../hooks/useLoading";
import { useModal } from "../hooks/useModal";
import { usePartnersContext } from "./PartnersContext";
import { filterPartnerByID } from "../api/partners/filterById-partner";
import { handleApiError } from "../utils/helpers/handleApiError";
import { useIsConnected } from "../hooks/useIsConnected";
import { Alert } from "react-native";
import { getAllPartners } from "../api/partners/getAll-partners";
import { sortPartnersByIdDesc } from "../utils/helpers/sortPartnersByIdDesc";
import { FilterContextProviderProps, FilterContextType, ResponseGetAllPartners, ResponsePartners } from "./types/FilterContext";



export const PartnerFilterContext = createContext<FilterContextType | null>(null);

export function PartnerFilterContextProvider({
  children
}: FilterContextProviderProps) {
    const [selectedId, setSelectedId] = useState("");
    const [isFiltred, setIsFiltred] = useState(false);
    const { loading, setLoading } = useLoading();
    const { visible, setVisible } = useModal();
    const { setPartners } = usePartnersContext();

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

            const response = await filterPartnerByID(selectedId);

            const { data }:ResponsePartners = response;

            setPartners([data]);
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

        Alert.alert('Campo Obrigatório','Você precisa informar o ID do parceiro para buscar.',[{text:'Ok'}]);

        return false;
    };

    const handleClearFilter = async () => {
        try {
            setLoading(true);

            const isConnected = await useIsConnected("Ao limpar o filtro você está buscando todos os parceiros, você precisa estar online.");

            if(!isConnected) {
                setVisible(false);
                setLoading(false);

                return;
            };
            const response = await getAllPartners();

            const { data }:ResponseGetAllPartners = response;

            const sortById = sortPartnersByIdDesc(data);

            setPartners(sortById);
            setIsFiltred(false);
            
        } catch (error) {
            handleApiError({error, title:"Erro ao buscar a lista de parceiros."});
        }finally{
            setLoading(false);
            setVisible(false);
            setSelectedId("");
        };
    };
  
  return (
    <PartnerFilterContext.Provider value={{ selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter , handleClearFilter}}>
      {children}
    </PartnerFilterContext.Provider>
  );
}


export function usePartnerFilterContext() {
  const context = useContext(PartnerFilterContext);
  
  if(!context){
    throw new Error("Erro ao acessar o contexto FilterContext.");
  };

  const { selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter, handleClearFilter} = context;

  return { selectedId, setSelectedId, loading, setLoading, visible, setVisible, isFiltred, setIsFiltred, handleFilter, handleClearFilter};
}

