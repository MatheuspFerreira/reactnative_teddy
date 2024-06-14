import { Dispatch } from "react";

export type PrivacyContextType = {
    notificationIsOn: boolean;
    setNotificationIsOn:Dispatch<React.SetStateAction<boolean>>
    policyIsOn: boolean;
    onToggleSwitchPolicy: () => Promise<void>;
    onToggleSwitchNotification: () => Promise<void>;
};
  
export type PrivacyContextProviderProps = { children: React.ReactNode };