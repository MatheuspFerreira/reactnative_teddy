import AsyncStorage from "@react-native-async-storage/async-storage";
import { ONBOARDING_STORAGE } from "./storage-config";


export async function storageOnboardingSave() {
    try {
        const onboarding = JSON.stringify({firstAccess:false});
        await AsyncStorage.setItem( ONBOARDING_STORAGE, onboarding);
        
    } catch (error) {
        throw error;
    }

};

export async function storageOnboardingGet() {
    try {
        const onboarding = await AsyncStorage.getItem(ONBOARDING_STORAGE);
    
        if(!onboarding) return onboarding;
    
        return JSON.parse(onboarding);
        
    } catch (error) {
        throw error;
    }

};
  
export async function storageOnboardingRemove () {
    try {
        await AsyncStorage.removeItem(ONBOARDING_STORAGE);
    } catch (error) {
        throw error;
    }

};