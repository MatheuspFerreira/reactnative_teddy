import styled from "styled-components/native";
import { ThemeProps } from "../../../@types/Styled";
import { Platform } from "react-native";

const getButtonStyles = (theme: ThemeProps) => {
  if (Platform.OS === "ios") {
    return `
        shadow-color: ${theme.colors.primary};
        shadow-offset: 0px 2px;
        shadow-opacity: 0.7;
        shadow-radius: 2px;
      `;
  } else {
    return `
        elevation: 4;
        shadow-color: ${theme.colors.primary};
      `;
  }
};

export const Button = styled.TouchableOpacity`
  width: 30%;
  height: 30%;
  ${({ theme }) => getButtonStyles(theme)}
`;
