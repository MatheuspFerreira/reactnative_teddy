export type PrivacyContextType = {
    notificationIsOn: boolean;
    policyIsOn: boolean;
    onToggleSwitchPolicy: () => Promise<void>;
    onToggleSwitchNotification: () => Promise<void>;
};
  
export type PrivacyContextProviderProps = { children: React.ReactNode };