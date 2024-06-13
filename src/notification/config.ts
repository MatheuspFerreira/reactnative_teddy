import { handleApiError } from "../utils/helpers/handleApiError";
import * as Notifications from "expo-notifications";
import { Alert, Platform } from "react-native";
import { AppError } from "../utils/appError";
import * as Device from "expo-device";
import { useRef } from "react";

export type TokenType = Notifications.DevicePushToken;

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});


export function useConfigNotification() {
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  function handleRegistrationError(errorMessage: string) {
    Alert.alert("Erro", errorMessage,[{text:"Ok"}]);
  };

  async function setAndroidNotificationChannel () {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
        });
      };
      
    } catch (error:unknown) {
      throw error;
    };
  };
  
  async function registerForPushNotificationsAsync() {
    try {
      await setAndroidNotificationChannel();
  
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
  
        if (existingStatus !== "granted") {
          await Notifications.requestPermissionsAsync();
        };
      
        const pushTokenString = await Notifications.getDevicePushTokenAsync();

        return pushTokenString;
     
      } else {
        throw new Error("É necessário usar um dispositivo físico para notificações push.");
      }
    } catch (error: unknown) {
      throw error;
    }

  };

  
  async function handleNotificationConfig  () {
    try {
      const token = await registerForPushNotificationsAsync();

      //chama da de uma api para salvar / validar o token

      notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
        // Espaço para alguma ação quando recebemos notificações;
      
        
      });
  
      responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
        // Espaço para definir qual ação vamos ter quando usuário clicar na notificação;
      
      });

      const receivedListenerUnSubscription = () => notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);
      
      const responseListenerUnSubscription = () => responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);
      
      return {
        receivedListenerUnSubscription,
        responseListenerUnSubscription
      };
      
    } catch (error: unknown) {
      const isAppError = error instanceof AppError;
      
      if(isAppError){
        handleApiError ({ error, title:"Erro" })
        return;
      };

      handleRegistrationError(`${error}`);
    };
  };

  return {
    handleNotificationConfig
  };
};

  

