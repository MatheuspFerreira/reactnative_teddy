import { Platform } from "react-native";
import styled from "styled-components/native";
import { ThemeProps } from "../../@types/Styled";
import { fontSize } from "../../utils/styles/fontSize";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";


interface CircleContainerProps {
  active: boolean;
}

const getButtonStyles = (theme:ThemeProps) => {
  if (Platform.OS === 'ios') {
    return `
      shadow-color: ${theme.colors.primary};
      shadow-offset: 0px 2px;
      shadow-opacity: 0.7;
      shadow-radius: 2px;
    `;
  } else {
    return `
      elevation: 5;
      shadow-color: ${theme.colors.primary};
      shadow-opacity: 0.7;
      
    `;
  }
};

export const OverLay = styled.View`
  width: 100%;
  height: auto;
  flex: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom:10px;
`;

export const Image = styled.Image`
  width: 100%;
  height:75%;

`;

export const CardContainer = styled.View`
  width: 100%;
  height: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  position: absolute;
  bottom: 0;
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  align-items: center;
  justify-content: space-around;
  padding: 5% 0px;
`;

export const CardFeedBackContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 3%;
`;

export const CircleIcon = styled.View<CircleContainerProps>`
  width: ${(props) => (props.active ? Responsiveness(1.2) : Responsiveness(0.8))}px;
  height: ${(props) => (props.active ? Responsiveness(1.2) : Responsiveness(0.8))}px;
  background-color: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.lightOrange};
  border-radius: ${Responsiveness(2)}px;
`;

export const CardTitle = styled.Text`
  width: 70%;
  max-width: ${Responsiveness(7)}%;
  font-weight: bold;
  font-size: ${fontSize(2.2)}px;
  text-align: center;
`;

export const CardFooter = styled.View`
  width: 100%;
  height: 31%;
  align-items: center;
  justify-content: space-between;
  margin-top: ${Responsiveness(2)}px;

`;

export const NextButton = styled.TouchableOpacity`
  width: 80%;
  height: ${Responsiveness(5)}px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${Responsiveness(1.2)}px;
  ${(props) => getButtonStyles(props.theme)}
`;

export const NextButtonText = styled.Text`
  color: ${(props) => props.theme.colors.secondary};
  font-size:${fontSize(1.8)}px;
  font-weight: 500;
 
`;

export const BackButton = styled.TouchableOpacity`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: ${Responsiveness(1.9)}px;
 
`;

export const BackButtonText = styled.Text`
  font-size:${fontSize(1.5)}px;
  font-weight: 500;
 
`;
