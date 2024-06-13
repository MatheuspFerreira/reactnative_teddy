import Toast from 'react-native-toast-message';
import { fontSize } from '../utils/styles/fontSize';

type ToastParams = {
  type: 'success' | 'error' | 'info';
  text1: string;
  text2: string;
};

export const useToast = () => {
  const showToast = ({ type, text1, text2 }: ToastParams) => {
    Toast.show({
      type: type,
      text1: text1,
      text2: text2,
      text1Style: { fontSize: fontSize(1.25) },
      text2Style: { fontSize: fontSize(1) },
    });
  };

  return { showToast };
};
