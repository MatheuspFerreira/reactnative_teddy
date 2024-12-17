import AsyncStorage from "@react-native-async-storage/async-storage";
import { CompanyType } from "../context/types/CompaniesContext";
import { StorageConfigEnum } from "./storage-config.enum";


const companiesConfig = StorageConfigEnum.COMPANIES_STORAGE;

export async function storageCompaniesSave(companies:CompanyType[] ) {
  try {
    await AsyncStorage.setItem(companiesConfig , JSON.stringify(companies));
  } catch (error) {
    throw error;
  };

};

export async function storageCompaniesGet() {
  try {
    const companies = await AsyncStorage.getItem(companiesConfig);
    
    if(!companies) return companies;
  
    const companiesToParse:CompanyType[] = JSON.parse(companies);
  
    return companiesToParse;
    
  } catch (error) {
    throw error;
  };

};

export async function storageCompaniesRemove () {
  try {
    await AsyncStorage.removeItem(companiesConfig);
    
  } catch (error) {
    throw error;
  };

};

