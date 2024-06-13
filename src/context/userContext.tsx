import { createContext, useContext, useState } from "react";
import { storageUserSave } from "../storage/storage-user";
import { UserContextProviderProps, UserContextType, UserType } from "./types/UserContext";


const UserContext = createContext<UserContextType | null>(null);


export function UserContextProvider ({ children }:UserContextProviderProps) {
    const [ user, setUser ] = useState<UserType | null>(null);

    const handleSetUser = async (user:UserType) => {
        await storageUserSave(user);
        setUser(user);
    };

    return(
        <UserContext.Provider value={{ user, setUser, handleSetUser }}>
            {children}
        </UserContext.Provider>

    );
};

export function useUserContext() {
    const context = useContext(UserContext);
    
    if(!context){
      throw new Error("Erro ao acessar o contexto UserContext.");
    };
  
    const { user, setUser, handleSetUser } = context;
  
    return { user, setUser, handleSetUser };
}
  
  