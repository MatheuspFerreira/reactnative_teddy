import { useEffect, useRef } from "react";
import { Alert, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { handleApiError } from "../utils/helpers/handleApiError";
import { AppError } from "../utils/appError";

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

  useEffect(() => {
    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  const handleRegistrationError = (errorMessage: string) => {
    Alert.alert("Erro", errorMessage, [{ text: "Ok" }]);
  };

  const setAndroidNotificationChannel = async () => {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
        });
      }
    } catch (error) {
      throw error;
    }
  };

  const registerForPushNotificationsAsync = async (): Promise<TokenType | undefined> => {
    try {
      await setAndroidNotificationChannel();

      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();

        if (existingStatus !== "granted") {
          await Notifications.requestPermissionsAsync();
        }

        const pushTokenString = await Notifications.getDevicePushTokenAsync();
        return pushTokenString;
      } else {
        throw new Error("É necessário usar um dispositivo físico para notificações push.");
      }
    } catch (error) {
      throw error;
    }
  };

  const handleNotificationConfig = async () => {
    try {
      const token = await registerForPushNotificationsAsync();

      // Chamada da API para salvar/validar o token (exemplo):
      // await savePushTokenToApi(token);

      notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
        // Ação ao receber uma notificação
        console.log("Notificação recebida: ", notification);
      });

      responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
        // Ação ao clicar na notificação
        console.log("Resposta da notificação: ", response);
      });

      const receivedListenerUnSubscription = () =>
        notificationListener.current && Notifications.removeNotificationSubscription(notificationListener.current);

      const responseListenerUnSubscription = () =>
        responseListener.current && Notifications.removeNotificationSubscription(responseListener.current);

      return {
        receivedListenerUnSubscription,
        responseListenerUnSubscription,
      };
    } catch (error: unknown) {
      if (error instanceof AppError) {
        handleApiError({ error, title: "Erro" });
      } else {
        handleRegistrationError(`${error}`);
      }
    }
  };

  return {
    handleNotificationConfig,
  };
}
