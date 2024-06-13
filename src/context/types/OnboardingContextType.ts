import { ReactNode } from "react";

export type OnboardingContextType = {
  onBoarding: number;
  setOnBoarding: React.Dispatch<React.SetStateAction<number>>;
  handleNavigateNextScreen: () => void;
  handleNavigateGobackScreen: () => void;
};


export type OnboardingContextProviderType = {
  children: ReactNode;
};
