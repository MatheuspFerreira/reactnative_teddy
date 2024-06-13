import { Alert } from "react-native";
import { AppError } from "../appError";

type ErrorType = {
    error:{message:string};
    title:string;
}

export function handleApiError ({ error, title }:ErrorType) {
    const errorMessage = "Erro no servidor, tente novamente mais tarde.";
    
    let message = error.message;
    
    const isAppError = error instanceof AppError;

    message = isAppError ? message : errorMessage;

    Alert.alert(title, message, [{ text: "OK" }]);
}