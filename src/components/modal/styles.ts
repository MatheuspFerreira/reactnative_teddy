import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import styled from "styled-components/native";
import { Dialog } from "react-native-paper";


export const CustomModal = styled(Dialog)`
    width: 90%;
    min-height: ${Responsiveness(5)}px;
    max-height: 100%;
    background-color: ${({ theme })=>   theme.colors.secondary};
    border-radius: ${Responsiveness(1.6)}px;
    margin: 0px auto;

`
