import { createContext, useContext, useState } from "react";
import { RootStackPublicParamList } from "../@types/Routes";
import { storageOnboardingSave } from "../storage/storage-onboarding";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { OnboardingContextProviderType, OnboardingContextType } from "./types/OnboardingContextType";

export const OnboardingContext = createContext<OnboardingContextType | null>(null);

export enum OnboardingJourneyEnum {
  FIRST_STEP = 'first-step',
  SECOND_STEP = 'second-step',
}

export function OnboardingContextProvider({children}:OnboardingContextProviderType) {
  const [onBoarding, setOnBoarding] = useState<string>(OnboardingJourneyEnum.FIRST_STEP);
  const navigation = useNavigation<NavigationProp<RootStackPublicParamList, "Onboarding">>();

  const handleNavigateNextScreen = async () => {
    if (onBoarding === OnboardingJourneyEnum.SECOND_STEP) {
      await storageOnboardingSave();

      navigation.navigate("Login");

      return;
    };

    setOnBoarding( OnboardingJourneyEnum.SECOND_STEP);
  };

  const handleNavigateGobackScreen = async () => {
    if (onBoarding === OnboardingJourneyEnum.FIRST_STEP) {
      await storageOnboardingSave();

      navigation.navigate("Login");

      return;
    };
    setOnBoarding(OnboardingJourneyEnum.FIRST_STEP)
  };

  return (
    <OnboardingContext.Provider
      value={{
        onBoarding,
        setOnBoarding,
        handleNavigateNextScreen,
        handleNavigateGobackScreen,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnBoardingContext() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error("Erro ao acessar o contexto OnBoadingContext.");
  };

  const {
    onBoarding,
    setOnBoarding,
    handleNavigateNextScreen,
    handleNavigateGobackScreen
  } = context;

  return {
    onBoarding,
    setOnBoarding,
    handleNavigateNextScreen,
    handleNavigateGobackScreen
  };
};
