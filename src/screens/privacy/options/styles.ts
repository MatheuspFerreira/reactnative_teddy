import styled from "styled-components/native"
import { fontSize } from "../../../utils/styles/fontSize"

export const SwitchCard = styled.View`
    width: 90%;
    height: 18%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 12px;
    margin-top: 5%;
    align-items: center;
    justify-content: space-around;
    padding: 10px 15px;
`;

export const SwitchContainer = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Label = styled.Text`
    font-weight:400;
    font-size: ${fontSize(1.5)}px;
    text-align: left;
    color:  ${({ theme }) => theme.colors.text.primary};
`;