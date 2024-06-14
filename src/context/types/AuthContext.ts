import { Dispatch } from "react";

export interface AuthContextProps {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<React.SetStateAction<boolean>>;
  toggleLogout:() => void;
  initialScreen:InitialScreenType;
  setInitialScreen:Dispatch<React.SetStateAction<InitialScreenType>>;
}

export type AuthContentProviderProps = {
  children: React.ReactNode;
};

export type InitialScreenType = 'Login' | 'Loading';

