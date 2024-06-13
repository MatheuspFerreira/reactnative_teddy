import { api } from "../config";


export async function createPartner () {
    try {
        
        const response = await api.post(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners`);

        return response;
        
    } catch (error) {
        throw error;
    }
}