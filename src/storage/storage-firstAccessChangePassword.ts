import AsyncStorage from "@react-native-async-storage/async-storage";
import { FIRSTACCESSCHANGEPASSWORD_STORAGE } from "./storage-config";


export async function storageFirstAccessChangePasswordSave() {
    const isFirstAccess = JSON.stringify({firstAccess:false});
    await AsyncStorage.setItem( FIRSTACCESSCHANGEPASSWORD_STORAGE, isFirstAccess)
};

export async function storageFirstAccessChangePasswordGet() {
    const isFirstAccess = await AsyncStorage.getItem(FIRSTACCESSCHANGEPASSWORD_STORAGE);
    
    if(!isFirstAccess) return isFirstAccess;

    return JSON.parse(isFirstAccess);
};
  
export async function storageFirstAccessChangePasswordRemove () {
    await AsyncStorage.removeItem(FIRSTACCESSCHANGEPASSWORD_STORAGE)
};