import { api } from "../config";

export async function deletePartnerById(id:string) {
    try {

        const response = await api.delete(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${id}`)

        return response;
        
    } catch (error) {
        throw error;
    }
}