import { useState } from "react";

export function useNewPasswordSecureEntry() {
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(false);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(false);

  const toggleSecureTextEntryPassword = () => {
    setSecureTextEntryPassword((current) => !current);
  };

  const toggleSecureTextEntryConfirmPassword = () => {
    setSecureTextEntryConfirmPassword((current) => !current);
  };

  return {
    secureTextEntryPassword,
    setSecureTextEntryPassword,
    secureTextEntryConfirmPassword,
    setSecureTextEntryConfirmPassword,
    toggleSecureTextEntryPassword,
    toggleSecureTextEntryConfirmPassword
  };
}
