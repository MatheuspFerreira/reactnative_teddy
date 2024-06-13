import { useState } from "react";

export function useModal() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible((current) => !current);
  };

  return { visible, setVisible, toggleVisible };
}
