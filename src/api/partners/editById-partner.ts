import { EditPartnerByIDType } from "../../context/types/PartnersContext";
import { api } from "../config";




export  async function editPartnerByID ({id, form}:EditPartnerByIDType) {
    try {
        const response = await api.put(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`, form);

        return response;
        
    } catch (error) {
        throw error;
    }
}