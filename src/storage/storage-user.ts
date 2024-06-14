import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storage-config";
import { UserType } from "../context/types/UserContext";


export async function storageUserSave(user:UserType) {
  try {
    await AsyncStorage.setItem( USER_STORAGE, JSON.stringify(user));
  } catch (error) {
    throw error
  }
}

export async function storageUserGet(): Promise<string | UserType> {
  try {
    const user = await AsyncStorage.getItem(USER_STORAGE);

    if (!user) return user;

    const userToParse: UserType = JSON.parse(user);
    
    return userToParse;
  } catch (error) {
    throw error;
  }
}

export async function storageUserRemove () {
  try {
    await AsyncStorage.removeItem(USER_STORAGE)
  } catch (error) {
    throw error;
  }
  
};

