import AsyncStorage from "@react-native-async-storage/async-storage";
import { PARTNES_STORAGE } from "./storage-config";
import { IPartners } from "../interface/IPartners";



export async function storagePartnesSave(partnes:IPartners[]) {

  try {
    await AsyncStorage.setItem(PARTNES_STORAGE, JSON.stringify(partnes));
  } catch (error) {
    throw error;
  }
}

export async function storagePartnesGet() {
  try {
    const partnes = await AsyncStorage.getItem(PARTNES_STORAGE);
    
    if(!partnes) return partnes;
  
    const partnesToParse:IPartners[] = JSON.parse(partnes);
  
    return partnesToParse;
    
  } catch (error) {
    throw error;
  }

};

export async function storagePartnesRemove() {
  try {
    await AsyncStorage.removeItem(PARTNES_STORAGE)
  } catch (error) {
    throw error;
  }

};

