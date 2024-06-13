import { TouchableOpacityProps } from "react-native";
import { Button } from "./styled";
import { ReactNode } from "react";

interface ButtonProps extends TouchableOpacityProps  {
    children:ReactNode;
};

export function IconButton ({ children, ...rest }:ButtonProps) {
    return (
        <Button {...rest}>
            {children}
        </Button>
    )
}