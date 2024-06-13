import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_STORAGE } from "./storage-config";
import { UserType } from "../context/types/UserContext";




export async function storageUserSave(user:UserType) {
  await AsyncStorage.setItem( USER_STORAGE, JSON.stringify(user));
}

export async function storageUserGet() {
    const user = await AsyncStorage.getItem(USER_STORAGE);
    
    if(!user) return user;

    const userToParse:UserType = JSON.parse(user);

    return userToParse;
};

export async function storageUserRemove () {
  await AsyncStorage.removeItem(USER_STORAGE)
};

