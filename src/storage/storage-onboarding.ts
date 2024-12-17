import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageConfigEnum } from "./storage-config.enum";

const onboardingConfig = StorageConfigEnum.ONBOARDING_STORAGE;

export async function storageOnboardingSave() {
    try {
        const onboarding = JSON.stringify({firstAccess:false});
        await AsyncStorage.setItem( onboardingConfig, onboarding);
        
    } catch (error) {
        throw error;
    }

};

export async function storageOnboardingGet() {
    try {
        const onboarding = await AsyncStorage.getItem(onboardingConfig);
    
        if(!onboarding) return onboarding;
    
        return JSON.parse(onboarding);
        
    } catch (error) {
        throw error;
    }

};
  
export async function storageOnboardingRemove () {
    try {
        await AsyncStorage.removeItem(onboardingConfig);
    } catch (error) {
        throw error;
    }

};