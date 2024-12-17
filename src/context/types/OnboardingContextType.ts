import { ReactNode } from "react";

export type OnboardingContextType = {
  onBoarding: string;
  setOnBoarding: React.Dispatch<React.SetStateAction<string>>;
  handleNavigateNextScreen: () => void;
  handleNavigateGobackScreen: () => void;
};


export type OnboardingContextProviderType = {
  children: ReactNode;
};
