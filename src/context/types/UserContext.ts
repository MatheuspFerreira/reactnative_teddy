import { Dispatch, ReactNode } from "react";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

export type UserContextProviderProps = {
    children:ReactNode;
};

export type UserContextType = {
    user:UserType;
    setUser:Dispatch<React.SetStateAction<UserType>>;
    handleSetUser:(value:UserType) => Promise<void>

};

export type UserType = {
    id:number;
    name:string;
    foto:AvatarImageSource;
};