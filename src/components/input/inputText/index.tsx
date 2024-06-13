import { TextInputProps } from "react-native-paper";
import { CustomInput } from "./styles";

export function Input({ ...rest }: TextInputProps) {
  return <CustomInput {...rest} />;
}
