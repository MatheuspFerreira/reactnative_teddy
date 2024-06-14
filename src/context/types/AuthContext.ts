import { Dispatch } from "react";

export interface AuthContextProps {
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<React.SetStateAction<boolean>>;
  isSigned:() => Promise<void>;
  toggleLogout:() => void;
  initialScreen:InitialScreenType;
  setInitialScreen:Dispatch<React.SetStateAction<InitialScreenType>>;
}

export type AuthContentProviderProps = {
  children: React.ReactNode;
};

export type InitialScreenType = 'Login' | 'Loading';

