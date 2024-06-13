import { createContext, useContext, useState } from "react";
import { LoadingContextProviderProps, ILoadingContext } from "./types/LoadingScreenContext";


export const LoadingContext = createContext<ILoadingContext | null>(null);

export function LoadingScreenContextProvider({
  children,
}: LoadingContextProviderProps) {
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading((current) => !current);
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoading, toggleLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}


export function useLoadingContext() {
  const context = useContext(LoadingContext);
  
  if(!context){
    throw new Error("Erro ao acessar o contexto LoadingContext.")
  }

  const { loading, setLoading, toggleLoading } = context;

  return { loading, setLoading, toggleLoading };
}

