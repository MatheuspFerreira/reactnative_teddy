import { api } from "../config";


export async function getAllCompanies () {
    try {

        const response = await api.get('https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies')

        return response;
        
    } catch (error) {
        throw error;
    }
}