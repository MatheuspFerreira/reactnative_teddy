import AsyncStorage from "@react-native-async-storage/async-storage";
import { ONBOARDING_STORAGE } from "./storage-config";


export async function storageOnboardingSave() {
    const onboarding = JSON.stringify({firstAccess:false});
    await AsyncStorage.setItem( ONBOARDING_STORAGE, onboarding)
};

export async function storageOnboardingGet() {
    const onboarding = await AsyncStorage.getItem(ONBOARDING_STORAGE);
    
    if(!onboarding) return onboarding;

    return JSON.parse(onboarding);
};
  
export async function storageOnboardingRemove () {
    await AsyncStorage.removeItem(ONBOARDING_STORAGE)
};