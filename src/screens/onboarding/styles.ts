import { fontSize } from "../../utils/styles/fontSize";
import styled from "styled-components/native";

export const OverLay = styled.View`
  width: 100%;
  height: auto;
  background-color: "white";
  flex: 1;
`;
export const ContainerText = styled.View`
  width: 100%;
  height: auto;
`;

export const CardText = styled.Text`
  font-size: ${fontSize(1.5)}px;
  text-align: center;
  font-weight: 400;
  line-height: ${fontSize(2.5)}px;
`;
