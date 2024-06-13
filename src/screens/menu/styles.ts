import styled from "styled-components/native";
import { fontSize } from "../../utils/styles/fontSize";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";

export const OverLay = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.screenBackground};
`;

export const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 5%;
  align-items: flex-start;
  gap: ${Responsiveness(2.7)}px;
  
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  gap: ${Responsiveness(1.8)}px;
  justify-content:center;
`;

export const CardText = styled.Text`
  font-size: ${fontSize(1.6)}px;
  color: ${({ theme }) => theme.colors.text.primary};
  padding-right: 35px;
`;
