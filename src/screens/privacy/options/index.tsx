
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
    setNotificationIsOn,
    policyIsOn,
    onToggleSwitchPolicy,
  } = usePrivacyContext();

  const toggleNotification = async () => {
    try {
      if(notificationIsOn){
        setNotificationIsOn(true);
        return;
      };

      const { status } = await Notifications.getPermissionsAsync();

      if(status === "granted"){
        setNotificationIsOn(true);
        return;

      }else {
        
        const { status } = await Notifications.requestPermissionsAsync();
        
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

      var isStatusAuthorized = initialStatus === "granted";

      if(!isStatusAuthorized){
        const { status:finalStatus } = await Notifications.requestPermissionsAsync();
        
        isStatusAuthorized = finalStatus === "granted";
      }

      setNotificationIsOn(isStatusAuthorized)
      
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
