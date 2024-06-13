import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";

export const OverLay = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
`;

export const AnimatedBackGround = styled(Animated.Image)`
  width: 50%;
  height: 50%;
`;

export const AnimatedText = styled(Animated.Text)`
  font-size: ${Responsiveness(2.1)}px;
  position: absolute;
  bottom: ${Responsiveness(26.2)}px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  text-align: center;
`;