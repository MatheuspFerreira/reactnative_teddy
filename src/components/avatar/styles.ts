import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import { fontSize } from "../../utils/styles/fontSize";
import { ThemeProps } from "../../@types/Styled";
import styled from "styled-components/native";
import { Platform } from "react-native";

interface CircleAvatarProps {
  isActive: boolean;
}

const getShadowStyles = (theme: ThemeProps) => {
  if (Platform.OS === "ios") {
    return `
      shadow-color: ${theme.colors.primary};
      shadow-offset: 0px 2px;
      shadow-opacity: 0.7;
      shadow-radius: 2px;
    `;
  } else {
    return `
      elevation: 0;

    `;
  }
};

export const AvatarContainer = styled.View<CircleAvatarProps>`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
`;

export const AvatarContent = styled.View<CircleAvatarProps>`
  width: ${Responsiveness(7)}px;
  max-width: 80px;
  height: ${Responsiveness(7)}px;
  max-height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${(props) =>
  props.isActive ? props.theme.colors.primary : props.theme.colors.secondary};
  padding: 5px;
  position: relative;

`;

export const Circle = styled.View<CircleAvatarProps>`
  width: ${Responsiveness(1.2)}px;
  height: ${Responsiveness(1.2)}px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background-color: ${(props) =>
  props.isActive
    ? 
    props.theme.colors.avatar.active.circle
    : 
    props.theme.colors.avatar.notActive.circle};
  position: absolute;
  bottom: -3px;
 
`;

export const Dot = styled.View<CircleAvatarProps>`
  width: ${Responsiveness(0.44)}px;
  height: ${Responsiveness(0.44)}px;
  border-radius: 100px;
  background-color: ${(props) =>
  props.isActive
    ?
    props.theme.colors.avatar.active.dot
    : 
    props.theme.colors.avatar.notActive.dot};
      
`;

export const TagName = styled.View<CircleAvatarProps>`
  width: auto;
  height: ${Responsiveness(2.5)}px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  border-radius: ${Responsiveness(0.7)}px;
  position: relative;
  top:-8.5px;
  z-index: -10;
  ${(props) => props.isActive && getShadowStyles(props.theme)}
  
`;
export const Name = styled.Text<CircleAvatarProps>`
  font-size: ${fontSize(1.32)}px;
  color: ${(props) =>
    props.isActive
      ? props.theme.colors.avatar.active.name
      : props.theme.colors.avatar.notActive.name};
`;
