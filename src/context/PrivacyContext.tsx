import { createContext, useContext, useState } from "react";
import { PrivacyContextType, PrivacyContextProviderProps } from "./types/PrivacyContext";



export const PrivacyContext = createContext<PrivacyContextType | null>(null);

export function PrivacyContextProvider({ children }: PrivacyContextProviderProps) {
  const [notificationIsOn, setNotificationIsOn] = useState(false);
  const [policyIsOn, setPolicyIsOn] = useState(false);

  const onToggleSwitchPolicy = async () => {
    setPolicyIsOn((current) => !current);
  };

  const onToggleSwitchNotification = async () => {
    setNotificationIsOn(notification => !notification);
  };

  return (
    <PrivacyContext.Provider
      value={{
        notificationIsOn,
        policyIsOn,
        onToggleSwitchPolicy,
        onToggleSwitchNotification,
      }}
    >
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacyContext() {
  const context = useContext(PrivacyContext);

  if (!context) {
    throw new Error("Erro ao acessar o contexto PrivacyContext.");
  }

  const {
    notificationIsOn,
    policyIsOn,
    onToggleSwitchPolicy,
    onToggleSwitchNotification,
  } = context;

  return {
    notificationIsOn,
    policyIsOn,
    onToggleSwitchPolicy,
    onToggleSwitchNotification,
  };
}
