import { api } from "../config";

export async function deleteCompaniesById(id:string) {
    try {

        const response = await api.delete(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${id}`)

        return response;
        
    } catch (error) {
        throw error;
    }
}