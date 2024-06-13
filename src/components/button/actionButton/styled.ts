import { Button as PaperButton } from "react-native-paper";
import { fontSize } from "../../../utils/styles/fontSize";
import styled from "styled-components/native";


type ButtonProps = {
  destructive:boolean
}

export const Button = styled(PaperButton).attrs<ButtonProps>(( props ) => ({
    textColor: props.destructive ? 'red' : props.theme.colors.text.primary
  }))`
    font-size: ${fontSize(5)}px;
  
  `;