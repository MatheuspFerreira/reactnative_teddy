import { ReactNode } from "react";

export type CardProps =  {
    children: ReactNode;
    onPress: () => void;
}