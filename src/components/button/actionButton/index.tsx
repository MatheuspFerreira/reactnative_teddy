import { Button } from "./styled";
import { ButtonProps as PaperButtonProps } from 'react-native-paper';

interface ActionButton extends PaperButtonProps {
    children:string;
    destructive?: boolean;
}

export function ActionButton ({ children, destructive, ...rest }:ActionButton) {
    return (
        <Button {...rest} destructive={destructive}>
            {children}  
        </Button>
        
    )
}