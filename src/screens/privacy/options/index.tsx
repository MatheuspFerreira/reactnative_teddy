
import { handleApiError } from "../../../utils/helpers/handleApiError";
import { usePrivacyContext } from "../../../context/PrivacyContext";
import { Label, SwitchCard, SwitchContainer } from "./styles";
import { Switch } from "../../../components/input/switch";
import * as Notifications from "expo-notifications";
import { AppState, Linking } from 'react-native';
import { useEffect } from "react";


export function PrivacyOptions() {
  const {
    notificationIsOn,
    policyIsOn,
    onToggleSwitchPolicy,
    onToggleSwitchNotification,
  } = usePrivacyContext();

  const toggleNotification = async () => {
    try {
      if(notificationIsOn){
        onToggleSwitchNotification();
        return;
      };

      const { status } = await Notifications.getPermissionsAsync();

      if(status === "granted"){
        onToggleSwitchNotification();
        return;

      }else {
        
        const { status } = await Notifications.requestPermissionsAsync();
        
        onToggleSwitchNotification();
        
        if(status !== "granted"){
          Linking.openSettings();
        };

      };
      
    } catch (error) {
      throw error;
    };

  };

  async function handleNotificationPermission ()  {
    try {
      
      const { status:initialStatus } = await Notifications.getPermissionsAsync();

      let isStatusAuthorized = initialStatus === "granted";

      if(!isStatusAuthorized){
        const { status:finalStatus } = await Notifications.requestPermissionsAsync();
        isStatusAuthorized = finalStatus === "granted";
        await onToggleSwitchNotification();
      }
      
    } catch (error) {
      handleApiError(
        { 
          error, 
          title:"Erro",
        
        }
      );
      throw error;
    };
  };

  useEffect(() => {
    const subscription = AppState.addEventListener("change",
      async (nextAppState) => {
        if (nextAppState === "active") {           
          handleNotificationPermission();
        };
      }
    );
    
    handleNotificationPermission();

    return () => {
      subscription.remove();
    };

  }, []);

  return (
    <SwitchCard>
      <SwitchContainer>
        <Label>Ativar notificações</Label>
        <Switch
          isSwitchOn={notificationIsOn}
          onToggleSwitch={toggleNotification}
        />
      </SwitchContainer>
      <SwitchContainer>
        <Label>Aceite da política</Label>
        <Switch isSwitchOn={policyIsOn} onToggleSwitch={onToggleSwitchPolicy} />
      </SwitchContainer>
    </SwitchCard>
  );
}
