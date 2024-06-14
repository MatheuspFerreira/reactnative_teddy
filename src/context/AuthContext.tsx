import { createContext, useContext, useState } from "react";
import {
  AuthContextProps,
  AuthContentProviderProps,
  InitialScreenType,
} from "./types/AuthContext";
import { handleApiError } from "../utils/helpers/handleApiError";
import { storageUserGet, storageUserRemove } from "../storage/storage-user";
import { storageCompaniesRemove } from "../storage/storage-companies";
import { storagePartnesRemove } from "../storage/storage-partnes";
import { useUserContext } from "./userContext";
import { UserType } from "./types/UserContext";

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthContentProvider({ children }: AuthContentProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [initialScreen, setInitialScreen] = useState<InitialScreenType>('Loading');
  const { setUser } = useUserContext();

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

      await Promise.all([
        storageUserRemove(),
        storageCompaniesRemove(),
        storagePartnesRemove()
      ]); 

    } catch (error) {
      throw error;
      
    }
  };

  const isSigned = async () => {
    try {
      const userVerify = await storageUserGet();

      if(!userVerify) return;
  
      setUser(userVerify as UserType);
  
      setIsSignedIn(true);
      
    } catch (error) {
      throw error;
    }
  };
  
  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        isSigned,
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
    isSigned,
    toggleLogout,
    initialScreen, 
    setInitialScreen
  } = context;

  return {
    isSignedIn,
    setIsSignedIn,
    isSigned,
    toggleLogout,
    initialScreen, 
    setInitialScreen
  };
}
