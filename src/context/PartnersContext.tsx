import { createContext, useContext, useState } from "react";
import { IPartners } from "../interface/IPartners";
import { useIsConnected } from "../hooks/useIsConnected";
import { createPartner } from "../api/partners/create-partner";
import { useLoading } from "../hooks/useLoading";
import { useModal } from "../hooks/useModal";
import { getAllPartners } from "../api/partners/getAll-partners";
import { sortByIdDesc } from "../utils/helpers/sortByIdDesc";
import { handleApiError } from "../utils/helpers/handleApiError";
import { useToast } from "../hooks/useToast";
import { EditPartnerByIDType, PartnersContextProviderProps, PartnersContextType, ResponseNewPartnerType, ResponsePartnersType } from "./types/PartnersContext";
import { deletePartnerById } from "../api/partners/deleteById-partner";
import { editPartnerByID } from "../api/partners/editById-partner";
import { storagePartnesGet, storagePartnesSave } from "../storage/storage-partnes";



export const PartnersContext = createContext<PartnersContextType | null>(null);

type ResponsePartner = {
  data:IPartners;
}

export function PartnersContextProvider({
  children,
}: PartnersContextProviderProps) {
  const [partners, setPartners] = useState<IPartners[]>([]);
  const { loading, setLoading } = useLoading();
  const { loading:modalLoading, setLoading:setModalLoading } = useLoading();
  const { visible, setVisible } = useModal();
  const { showToast } = useToast();

  const fetchAllPartners = async () => {
    try {
      setLoading(true);

      const isConnected = await useIsConnected("Para trazer uma lista atualizada dos parceiros, você precisa estar conectado.");
      
      if (!isConnected){

        const storagePartnes = storagePartnesGet();
        
        if(!storagePartnes) return;

        setPartners(storagePartnes as unknown as IPartners[]);
        
        return;
      }
  
      const response = await getAllPartners();

      const { data }: ResponsePartnersType = response;

      const sortById = sortByIdDesc<IPartners>(data);

      await storagePartnesSave(sortById);

      setPartners(sortById);
    } catch (error) {
      handleApiError({ error, title: "Erro ao buscar os parceiros" });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewPartner = async () => {
    try {
      setModalLoading(true);

      const isConnected = await useIsConnected("Para criar um novo parceiro você precisa estar conectado a uma rede.");

      if (!isConnected) return;

      const response = await createPartner();
      const { data }: ResponseNewPartnerType = response;
      const { id, name } = data;
      
      setModalLoading(false);
      setVisible(false);
      
      setLoading(true);
      
      await fetchAllPartners();

      setLoading(false);

      showToast({type:'success', text1:'Parceiro cadastrado com sucesso', text2:`Parceiro ${name} com ID ${id} cadastrado.`});
    } catch (error) {
      handleApiError({ error, title: "Erro ao criar o parceiro" });
    } finally {
      setModalLoading(false);
      setVisible(false);
    }
  };

  const handleDeletePartnerByID = async (id:string) => {
    try {
      const response = await deletePartnerById(id);

      const { data }:ResponsePartner = response;

      const { name } = data;

      showToast({type:'success', text1:'Delatado com sucesso', text2:`Parceiro ${name} deletado com sucesso.`});

      await fetchAllPartners();
      
      return data;

    } catch (error) {
      throw error;
    }

  };

  const handleEditPartnerByID = async ({id, form}:EditPartnerByIDType) => {
    try {
      const response = await editPartnerByID({id, form});

      const { data }:ResponsePartner = response;

      const { name } = data;

      showToast({type:'success', text1:'Editado com sucesso', text2:`Parceiro ${name} editado com sucesso.`});
      
      return data;
      
    } catch (error) {
      throw error;
    }

  };

  return (
    <PartnersContext.Provider value={{ 
        partners, 
        setPartners, 
        loading, 
        setLoading, 
        modalLoading, 
        setModalLoading, 
        visible, 
        setVisible, 
        fetchAllPartners, 
        handleCreateNewPartner, 
        handleDeletePartnerByID, 
        handleEditPartnerByID   
      }}
    >
      {children}
    </PartnersContext.Provider>
  );
}


export function usePartnersContext() {
  const context = useContext(PartnersContext);
  
  if(!context){
    throw new Error("Erro ao acessar o contexto PartnersContext.")
  };

  const { 
    partners, 
    setPartners, 
    loading, 
    setLoading, 
    modalLoading, 
    setModalLoading, 
    visible, 
    setVisible, 
    fetchAllPartners, 
    handleCreateNewPartner, 
    handleDeletePartnerByID, 
    handleEditPartnerByID   
  } = context;

  return { 
    partners, 
    setPartners, 
    loading, 
    setLoading, 
    modalLoading, 
    setModalLoading, 
    visible, 
    setVisible, 
    fetchAllPartners, 
    handleCreateNewPartner, 
    handleDeletePartnerByID, 
    handleEditPartnerByID   
  };
}

