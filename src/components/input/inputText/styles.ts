import { TextInput } from "react-native-paper";
import styled from "styled-components/native";
import { Responsiveness } from "../../../utils/styles/SizeResponsiveness";
import { fontSize } from "../../../utils/styles/fontSize";

export const CustomInput = styled(TextInput).attrs((props) => ({
    activeOutlineColor: props.theme.colors.primary,
    outlineStyle: {
      borderRadius: 12,
      backgroundColor: "white",
    },
    style:{
      fontSize:fontSize(1),
    }, 
    
  }))`
  width: 100%;
  height: ${Responsiveness(4.5)}px;
  margin-top: 4%;
  font-size: ${fontSize(1.5)}px;
    
`;