import { useState } from "react";

export function useInputSecureTextEntry() {
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry((current) => !current);
  };

  return { secureTextEntry, setSecureTextEntry, toggleSecureTextEntry };
}
