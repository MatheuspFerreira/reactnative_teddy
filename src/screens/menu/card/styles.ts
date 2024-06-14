import { Card as CardPaper } from "react-native-paper";
import styled from "styled-components/native";
import { Responsiveness } from "../../../utils/styles/SizeResponsiveness";

export const TouchableOpacity = styled.TouchableOpacity`
    width: 42%;
    height: auto;
` 

export const CustomCard = styled(CardPaper)`
    width: 100%;
    height: 47%;
    background-color: ${({ theme }) => theme.colors.secondary};
` 

export const CardContent = styled.View`
    height: 100%;
    align-items: flex-start;
    justify-content: baseline;
    flex-direction: column;
    gap:  ${Responsiveness(1)}px;
    padding-left: ${Responsiveness(1.5)}px;
    padding-right: ${Responsiveness(0.4)}px;
    margin-top: ${Responsiveness(2.3)}px;
   
` 
