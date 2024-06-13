import styled from "styled-components/native";
import { fontSize } from "../../../utils/styles/fontSize";



export const Container = styled.View`
    width: 100%;
    height: auto;

`

export const Label = styled.Text`
    font-size: ${fontSize(1.4)}px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text.primary};

`