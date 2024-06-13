import { Dispatch, ReactNode } from "react";
import { IPartners } from "../../interface/IPartners";
import { ISubmitData } from "../../screens/partners/partnersCard/edit";

export type PartnersContextProviderProps = {
  children:ReactNode
};

export type PartnersContextType = {
  partners:IPartners[];
  setPartners:Dispatch<React.SetStateAction<IPartners[]>>;
  loading:boolean;
  setLoading:Dispatch<React.SetStateAction<boolean>>;
  modalLoading:boolean;
  setModalLoading:Dispatch<React.SetStateAction<boolean>>;
  visible:boolean;
  setVisible:Dispatch<React.SetStateAction<boolean>>;
  fetchAllPartners:() => Promise<void>;
  handleCreateNewPartner:() => Promise<void>;
  handleDeletePartnerByID:(value:string) => Promise<IPartners>;
  handleEditPartnerByID:({id, form}:EditPartnerByIDType) => Promise<IPartners>;

};

export type ResponseNewPartnerType = {
  data: IPartners;
};

export type ResponsePartnersType = {
  data: IPartners[];
};

export type EditPartnerByIDType = {
  id:string;
  form:ISubmitData;
}