import { createContext, useContext, useState } from "react";
import {
  AuthContextProps,
  AuthContentProviderProps,
  InitialScreenType,
} from "./types/AuthContext";
import { handleApiError } from "../utils/helpers/handleApiError";
import { storageUserRemove } from "../storage/storage-user";

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthContentProvider({ children }: AuthContentProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [initialScreen, setInitialScreen] = useState<InitialScreenType>('Loading');

  const toggleLogout = async () => {
    try {
      setInitialScreen('Login')
      await clearAsyncStorage();
    } catch (error) {
      handleApiError({error, title:"Erro"})
    }finally {
      setIsSignedIn(false);
    };
  };

  const clearAsyncStorage = async () => {
    try {
      await storageUserRemove();
    } catch (error) {
      throw error;
      
    }
  }
  
  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        toggleLogout,
        initialScreen, 
        setInitialScreen
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Não foi possível acessar o contexto AuthContext.");
  }

  const {
    isSignedIn,
    setIsSignedIn,
    toggleLogout,
    initialScreen, 
    setInitialScreen
  } = context;

  return {
    isSignedIn,
    setIsSignedIn,
    toggleLogout,
    initialScreen, 
    setInitialScreen
  };
}
