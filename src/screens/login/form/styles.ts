import { ThemeProps } from "../../../@types/Styled";
import styled from "styled-components/native";
import { TextInput } from "react-native-paper";
import { Platform } from "react-native";
import { Responsiveness } from "../../../utils/styles/SizeResponsiveness";
import { fontSize } from "../../../utils/styles/fontSize";

type ButtonProps = {
  loading: boolean;
}


const getShadowStyles = () => {
  if (Platform.OS === "ios") {
    return `
        shadow-offset: 0px 2px;
        shadow-opacity: 0.7;
        shadow-radius: 2px;
      `;
  } else {
    return `elevation: 5;`;
  }
};

export const OverLay = styled.View`
  width: 89%;
  height: auto;
  min-height: 300px;
  background-color: white;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  ${getShadowStyles}
  bottom: 73.5%;
  border-radius: 20px;
  padding-bottom: ${Responsiveness(1.8)}px;
`;

export const TitleContainer = styled.View`
  width: 90%;
  height: auto;
  align-items: left;
  padding: 14px 0px 0px 0px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${fontSize(1.9)}px;
`;

export const FormContainer = styled.View`
  width: 90%;
  height: auto;
`;

export const Input = styled(TextInput).attrs((props) => ({
  activeOutlineColor: props.theme.colors.primary,
  outlineStyle: {
    borderRadius: Responsiveness(1),
    backgroundColor: "white",
  },
}))`
  width: 100%;
  height: ${Responsiveness(4.8)}px;
  max-height: 70px;
  margin-top: ${Responsiveness(1)}px;
  color: white;

`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: ${Responsiveness(9.3)}px;
  align-items: center;
  justify-content: space-between;
  margin-top: ${Responsiveness(2)}px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 100%;
  height: ${Responsiveness(4.5)}px;
  max-height: 70px;
  background-color: ${(props) =>
    props.loading ? "grey" : props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: ${Responsiveness(1)}px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${fontSize(1.8)}px;
  font-weight: bold;
`;

export const ForgotPassWordText = styled.Text`
  font-size: ${fontSize(1.4)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: ${fontSize(1.2)}px;
  font-weight: 400;
  margin-left: 5px;
  margin-top: 5px;
`;
