import { Dispatch, ReactNode } from "react";
import { ISubmitData } from "../../screens/companies/companiesCard/edit";

export type CompaniesContextProviderProps = {
  children:ReactNode
};

export type CompaniesContextType = {
  companies:CompanyType[];
  setCompanies:Dispatch<React.SetStateAction<CompanyType[]>>;
  loading:boolean;
  setLoading:Dispatch<React.SetStateAction<boolean>>;
  modalLoading:boolean;
  setModalLoading:Dispatch<React.SetStateAction<boolean>>;
  visible:boolean;
  setVisible:Dispatch<React.SetStateAction<boolean>>;
  fetchAllCompanies:() => Promise<void>;
  handleCreateNewCompany:() => Promise<void>;
  handleDeleteCompanyByID:(value:string) => Promise<CompanyType>;
  handleEditCompanyByID:({id, form}:EditCompaniesByIDType) => Promise<CompanyType>;

};

export type ResponseCompaniesType = {
  data: CompanyType[];
};

export type EditCompaniesByIDType = {
  id:string;
  form:ISubmitData;
}

export type CompanyType = {
  createdAt: string;
  companyName: string;
  collaboratorsCount: number;
  isActive: boolean;
  lastSubmit: string;
  id: string;
};


export type ResponseCompanies = {
  data:CompanyType;
}

