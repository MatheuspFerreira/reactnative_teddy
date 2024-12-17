import AsyncStorage from "@react-native-async-storage/async-storage";
import { IPartners } from "../interface/IPartners";
import { StorageConfigEnum } from "./storage-config.enum";


const partnesConfig = StorageConfigEnum.PARTNES_STORAGE;

export async function storagePartnesSave(partnes:IPartners[]) {

  try {
    await AsyncStorage.setItem(partnesConfig, JSON.stringify(partnes));
  } catch (error) {
    throw error;
  }
}

export async function storagePartnesGet() {
  try {
    const partnes = await AsyncStorage.getItem(partnesConfig);
    
    if(!partnes) return partnes;
  
    const partnesToParse:IPartners[] = JSON.parse(partnes);
  
    return partnesToParse;
    
  } catch (error) {
    throw error;
  }

};

export async function storagePartnesRemove() {
  try {
    await AsyncStorage.removeItem(partnesConfig)
  } catch (error) {
    throw error;
  }

};

