import styled from "styled-components/native";
import { fontSize } from "../../utils/styles/fontSize";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";


export const OverLay = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.screenBackground };
    align-items: center;
    justify-content: flex-start;
`;

export const Card = styled.View`
    width: 90%;
    height: 59%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 12px;
    margin-top: 5%;

`;

export const Header = styled.View`
    width: 100%;
    height: auto;
    padding: ${Responsiveness(1.5)}px;
    padding-bottom: ${Responsiveness(1.5)}px;

`;

export const HeaderTitle = styled.Text`
    font-weight: bold;
    font-size: ${fontSize(1.6)}px;
    text-align: left;
    color:  ${({ theme }) => theme.colors.text.primary};

`;

export const ContainerText = styled.View`
    width: 100%;
    height: auto;
    padding: 15px;
    padding-top: ${Responsiveness(1.4)}px;

`;

export const Section = styled.View`
    width: 100%;
    height: auto;
    gap: 10px;
    padding: 5px;
    
`;

export const SectionTitle = styled.Text`
    font-weight: bold;
    font-size: ${fontSize(1.4)}px;
    text-align: left;
    color:  ${({ theme }) => theme.colors.text.primary};
    
`;

export const SectionText = styled.Text`
    font-weight: 400;
    font-size: ${fontSize(1.18)}px;
    color:  ${({ theme }) => theme.colors.text.primary};
    text-align: justify;
    line-height: ${Responsiveness(1.85)}px;
    
`;