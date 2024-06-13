import styled from "styled-components/native";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";

export const OverLay = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FirstContent = styled.View`
  width: 100%;
  height: 50%;
  background-color: white;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

`;

export const Image = styled.Image`
  width: 54%;
  height: 54%;
`;

export const LastContent = styled.View`
  width: 100%;
  height: 50%;
  background-color: white;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 24px 24px 0 0;
  position: relative;
 
`;
