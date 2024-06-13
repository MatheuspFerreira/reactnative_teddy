import { Responsiveness } from "../../../utils/styles/SizeResponsiveness";
import { Switch as SwitchNative } from "react-native-switch";
import { fontSize } from "../../../utils/styles/fontSize";
import styled from "styled-components/native";

export const SwitchContainer = styled.View`
  width: auto;
  height: auto;
  align-items: flex-end;
  position: relative;
  gap:${Responsiveness(0.4)}px;

`;

export const Label = styled.Text`
  width: 100%;
  font-size: ${fontSize(1.15)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;

`;

export const CustomSwitch = styled(SwitchNative).attrs((props) => ({
  circleSize: Responsiveness(2.4),
  circleBorderWidth: 0.2,
  backgroundActive: props.theme.colors.primary,
  backgroundInactive: "grey",
  circleActiveColor: "white",
  circleInActiveColor: "white",
  barHeight: Responsiveness(3.2),
  switchLeftPx: 3,
  switchRightPx: 3,
  switchWidthMultiplier: 2.1,
  switchBorderRadius: Responsiveness(3),
  changeValueImmediately: true,
  innerCircleStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
}))``;
