import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import { fontSize } from "../../utils/styles/fontSize";
import { TextInput } from "react-native-paper";
import styled from "styled-components/native";


type ButtonProps = {
  loading:boolean;
}

export const Form = styled.View`
  width: 100%;
  height: auto;
  gap: ${Responsiveness(1)}px;

`;

export const Input = styled(TextInput).attrs((props) => ({
  activeOutlineColor: props.theme.colors.primary,
  outlineStyle: {
    borderRadius: Responsiveness(1),
    backgroundColor: "white",
  },
}))`
  width: 100%;
  height: ${Responsiveness(4)}px;
  color: white;
  background-color: ${({ theme }) => theme.colors.secondary};
  font-size: ${fontSize(1.4)}px;
`;

export const ErrorText = styled.Text`
  height: auto;
  font-weight: 500;
  font-size: ${fontSize(1.2)}px;
  color: red;
  margin-left: 5px;
`;

export const FormFooter = styled.View`
  width: 100%;
  height: auto;
  gap: ${Responsiveness(1)}px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${Responsiveness(4)}px;
  background-color: ${(props) => props.loading ? "grey" : props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${Responsiveness(1)}px;
  margin-top: ${Responsiveness(1)}px;
`;

export const TextButton = styled.Text`
  font-weight: 500;
  font-size: ${fontSize(1.65)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;