import {createContext, useContext, useState } from "react";
import { useIsConnected } from "../hooks/useIsConnected";
import { useLoading } from "../hooks/useLoading";
import { useModal } from "../hooks/useModal";
import { sortByIdDesc } from "../utils/helpers/sortByIdDesc";
import { handleApiError } from "../utils/helpers/handleApiError";
import { useToast } from "../hooks/useToast";
import { CompaniesContextProviderProps, CompaniesContextType, EditCompaniesByIDType, ResponseCompanies, ResponseCompaniesType } from "./types/CompaniesContext";
import { getAllCompanies } from "../api/companies/getAll-companies";
import { createCompanies } from "../api/companies/create-companies";
import { deleteCompaniesById } from "../api/companies/deleteById-companies";
import { editCompaniesByID } from "../api/companies/editById-companies";
import { storageCompaniesGet, storageCompaniesSave } from "../storage/storage-companies";


export const CompaniesContext = createContext<CompaniesContextType | null>(null);


export type CompanyType = {
  createdAt: string;
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
  lastSubmit: string;
  id: string;
};


export function CompaniesContextProvider({
  children,
}: CompaniesContextProviderProps) {
  const [companies, setCompanies] = useState<CompanyType[]>([]);
  const { loading, setLoading } = useLoading();
  const { loading:modalLoading, setLoading:setModalLoading } = useLoading();
  const { visible, setVisible } = useModal();
  const { showToast } = useToast();

  const fetchAllCompanies = async () => {
    try {
      setLoading(true);

      const isConnected = await useIsConnected("Para trazer uma lista atualizada das empresas, você precisa estar conectado.");
      
      if (!isConnected){

        const storageCompanies = storageCompaniesGet();
        
        if(!storageCompanies) return;

        setCompanies(storageCompanies as unknown as CompanyType[]);
        
        return;
      }
  
      const response = await getAllCompanies();

      const { data }: ResponseCompaniesType = response;

      const sortById = sortByIdDesc<CompanyType>(data);

      await storageCompaniesSave(sortById);

      setCompanies(sortById);
    } catch (error) {
      handleApiError({ error, title: "Erro ao buscar as empresas" });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNewCompany = async () => {
    try {
      setModalLoading(true);

      const isConnected = await useIsConnected("Para criar uma nova empresa você precisa estar conectado a uma rede.");

      if (!isConnected) return;

      const response = await createCompanies();
      const { data }: ResponseCompanies = response;
      const { id, companyName } = data;
      
      setModalLoading(false);
      setVisible(false);
      
      setLoading(true);
      
      await fetchAllCompanies();

      setLoading(false);

      showToast({type:'success', text1:'Empresa cadastrado com sucesso', text2:`Empresa ${companyName} com ID ${id} cadastrado.`});
    } catch (error) {
      handleApiError({ error, title: "Erro ao criar a empresa." });
    } finally {
      setModalLoading(false);
      setVisible(false);
    }
  };

  const handleDeleteCompanyByID = async (id:string) => {
    try {
      const response = await deleteCompaniesById(id);

      const { data }:ResponseCompanies = response;

      const { companyName } = data;

      showToast({type:'success', text1:'Delatado com sucesso', text2:`Empresa ${companyName} deletada com sucesso.`});

      await fetchAllCompanies();
      
      return data;

    } catch (error) {
      throw error;
    }

  };

  const handleEditCompanyByID = async ({id, form}:EditCompaniesByIDType) => {
    try {
      const response = await editCompaniesByID({id, form});

      const { data }:ResponseCompanies = response;

      const { companyName } = data;

      showToast({type:'success', text1:'Editado com sucesso', text2:`Empresa ${companyName} editada com sucesso.`});
      
      return data;
      
    } catch (error) {
      throw error;
    }

  };

  return (
    <CompaniesContext.Provider value={{ companies, setCompanies, loading, setLoading, modalLoading, setModalLoading, visible, setVisible, fetchAllCompanies, handleCreateNewCompany, handleDeleteCompanyByID, handleEditCompanyByID   }}>
      {children}
    </CompaniesContext.Provider>
  );
}


export function useCompaniesContext() {
  const context = useContext(CompaniesContext);
  
  if(!context){
    throw new Error("Erro ao acessar o contexto CompaniesContext.")
  };

  const { companies, setCompanies, loading, setLoading, modalLoading, setModalLoading, visible, setVisible, fetchAllCompanies, handleCreateNewCompany, handleDeleteCompanyByID, handleEditCompanyByID } = context;

  return { companies, setCompanies, loading, setLoading , modalLoading, setModalLoading, visible, setVisible, fetchAllCompanies, handleCreateNewCompany, handleDeleteCompanyByID, handleEditCompanyByID };
}

