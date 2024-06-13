import { createContext, useContext, useState } from "react";
import {
  AuthContextProps,
  AuthContentProviderProps,
} from "./types/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { handleApiError } from "../utils/helpers/handleApiError";

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthContentProvider({ children }: AuthContentProviderProps) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const toggleLogout = async () => {
    try {
     await AsyncStorage.clear();

    } catch (error) {
      handleApiError({error, title:"Erro"})
    }finally {
      setIsSignedIn(false);
    };

  };
  
  return (
    <AuthContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        toggleLogout,
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
  } = context;

  return {
    isSignedIn,
    setIsSignedIn,
    toggleLogout,
  };
}
