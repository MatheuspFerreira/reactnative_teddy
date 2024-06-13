import styled from "styled-components/native";
import { fontSize } from "../../../utils/styles/fontSize";


export const Container = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

`

export const AvatarWrapper = styled.View`
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 2px;
    border: 3px solid ${({ theme }) => theme.colors.primary};

`

export const ContainerText = styled.View`
    width: 60%;
    height: auto;
    flex-direction: column;

`

export const ResponsibleText = styled.Text`
    font-size: ${fontSize(1.5)}px;
    font-weight: 400;
    color: ${({ theme })=> theme.colors.text.primary};


`

export const Name = styled.Text`
    font-size: ${fontSize(2)}px;
    font-weight: 600;
    color: ${({ theme })=> theme.colors.text.primary};


`
