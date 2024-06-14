import NetInfo from "@react-native-community/netinfo";
import { Alert } from "react-native";

export async function useIsConnected(msg: string): Promise<boolean | null> {
    const netInfo = await NetInfo.fetch();

    const { isConnected } = netInfo;
    
    if (isConnected) return isConnected;

    Alert.alert("Você está Offiline", msg, [{ text: "Ok" }]);

    return isConnected;
}
