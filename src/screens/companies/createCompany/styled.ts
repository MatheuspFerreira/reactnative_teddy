import styled from "styled-components/native";
import { fontSize } from "../../../utils/styles/fontSize";



export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: ${fontSize(1.4)}px;

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: ${fontSize(1.25)}px;

`;

export const LoadingContainer = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 30px;
  gap:10px;
`;
