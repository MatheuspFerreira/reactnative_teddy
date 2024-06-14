import { EditCompaniesByIDType } from "../../context/types/CompaniesContext";
import { api } from "../config";




export  async function editCompaniesByID ({id, form}:EditCompaniesByIDType) {
    try {
        const response = await api.put(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`, form);

        return response;
        
    } catch (error) {
        throw error;
    }
}