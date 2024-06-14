import AsyncStorage from "@react-native-async-storage/async-storage";
import { PARTNES_STORAGE } from "./storage-config";
import { IPartners } from "../interface/IPartners";



export async function storagePartnesSave(partnes:IPartners[]) {
  await AsyncStorage.setItem(PARTNES_STORAGE, JSON.stringify(partnes));
}

export async function storagePartnesGet() {
  const partnes = await AsyncStorage.getItem(PARTNES_STORAGE);
    
  if(!partnes) return partnes;

  const partnesToParse:IPartners[] = JSON.parse(partnes);

  return partnesToParse;
};

export async function storagePartnesRemove() {
  await AsyncStorage.removeItem(PARTNES_STORAGE)
};

