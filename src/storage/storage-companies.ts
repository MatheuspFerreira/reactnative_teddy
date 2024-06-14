import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANIES_STORAGE } from "./storage-config";
import { CompanyType } from "../context/types/CompaniesContext";

export async function storageCompaniesSave(companies:CompanyType[] ) {
  try {
    await AsyncStorage.setItem(COMPANIES_STORAGE , JSON.stringify(companies));
  } catch (error) {
    throw error;
  };

};

export async function storageCompaniesGet() {
  try {
    const companies = await AsyncStorage.getItem(COMPANIES_STORAGE);
    
    if(!companies) return companies;
  
    const companiesToParse:CompanyType[] = JSON.parse(companies);
  
    return companiesToParse;
    
  } catch (error) {
    throw error;
  };

};

export async function storageCompaniesRemove () {
  try {
    await AsyncStorage.removeItem(COMPANIES_STORAGE);
    
  } catch (error) {
    throw error;
  };

};

