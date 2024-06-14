import { CustomModal } from "./styles";
import { Portal } from "react-native-paper";


export type ModalProps = {
  visible:boolean;
  setVisible:(value:boolean) => void;
  children:React.ReactNode;
  dismissable?:boolean
}

export function Modal({
  visible,
  setVisible,
  children,
  dismissable = false
}: ModalProps) { 
  
  const hideDialog = () => setVisible(false);

  return (
    <Portal >
      <CustomModal 
        visible={visible} 
        dismissable={dismissable}
        onDismiss={hideDialog}
        
      >
        {children}
      </CustomModal>
    </Portal>
  );
}
