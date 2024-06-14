import AsyncStorage from "@react-native-async-storage/async-storage";
import { COMPANIES_STORAGE } from "./storage-config";
import { CompanyType } from "../context/types/CompaniesContext";

export async function storageCompaniesSave(companies:CompanyType[] ) {
  await AsyncStorage.setItem(COMPANIES_STORAGE , JSON.stringify(companies));
};

export async function storageCompaniesGet() {
  const companies = await AsyncStorage.getItem(COMPANIES_STORAGE);
    
  if(!companies) return companies;

  const companiesToParse:CompanyType[] = JSON.parse(companies);

  return companiesToParse;
};

export async function storageCompaniesRemove () {
  await AsyncStorage.removeItem(COMPANIES_STORAGE)
};

