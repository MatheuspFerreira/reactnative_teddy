import styled from "styled-components/native";
import { fontSize } from "../../utils/styles/fontSize";

export const OverLay = styled.View`
  width: 90%;
  height: 85%;
  padding: 0% 8% 0px 8%;
  margin: 3% auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
`;

export const FirstContent = styled.View`
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${fontSize(1.5)}px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 6% 0px 10px 0px;
`;

export const Text = styled.Text`
  font-weight: 400;
  font-size: ${fontSize(1.15)}px;
  line-height: ${fontSize(1.8)}px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text.primary};
`;
