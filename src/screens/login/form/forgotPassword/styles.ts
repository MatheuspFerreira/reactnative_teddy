import styled from "styled-components/native";
import { fontSize } from "../../../../utils/styles/fontSize";

export const ForgotPassWordText = styled.Text`
  font-size: ${fontSize(1.45)}px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  
`;


export const LoadingContainer = styled.View`
  width: auto;
  height: auto;
  align-items: center;
  justify-content: center;
  gap:3px;
  margin-top:10px;

`