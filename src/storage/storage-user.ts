import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../context/types/UserContext";
import { StorageConfigEnum } from "./storage-config.enum";

const userConfig = StorageConfigEnum.USER_STORAGE;
export async function storageUserSave(user:UserType) {
  try {
    await AsyncStorage.setItem(userConfig, JSON.stringify(user));
  } catch (error) {
    throw error
  }
}

export async function storageUserGet(): Promise<string | UserType> {
  try {
    const user = await AsyncStorage.getItem(userConfig);

    if (!user) return user;

    const userToParse: UserType = JSON.parse(user);
    
    return userToParse;
  } catch (error) {
    throw error;
  }
}

export async function storageUserRemove () {
  try {
    await AsyncStorage.removeItem(userConfig)
  } catch (error) {
    throw error;
  }
};

