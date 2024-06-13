import { useState } from "react";

export function usePrivacySwitch() {
  const [notificationIsOn, setNotificationIsOn] = useState(false);
  const [policyIsOn, setPolicyIsOn] = useState(false);

  const onToggleSwitchPolicy = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
   setState((current) => !current);
  };


  return {
    notificationIsOn,
    setNotificationIsOn,
    policyIsOn,
    setPolicyIsOn,
    onToggleSwitchPolicy,
  };
}
