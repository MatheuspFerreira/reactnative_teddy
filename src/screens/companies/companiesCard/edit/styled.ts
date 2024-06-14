import styled from "styled-components/native";
import { fontSize } from "../../../../utils/styles/fontSize";
import { Input as CustomInput } from "../../../../components/input/inputText";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { IconButton } from "../../../../components/button/IconButton";


export const Container = styled.View`
  width: 100%;
  height: auto;
  padding: 0px 5%;
  background-color: white;

`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: ${fontSize(1.5)}px;

`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: ${fontSize(1)}px;

`;

export const Form = styled.View`
  width: 100%;
  height: auto;
  gap: 5px;
  padding: 20px 0px;
  align-items: flex-start;
  justify-content: center;

`;

export const Input = styled(CustomInput)`
  width: 80%;
  height: 45px;
  font-size: ${fontSize(1.3)}px;

`;

export const InputContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
`;

export const ChipView = styled.View`
  width: 100%;
  height: auto;
  max-height: 100px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;

export const OverLay = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

export const PlusCircleButton = styled(IconButton)`
  width: auto;
  height: auto;
  position: absolute;
  right: 5%;
  top: 46%;
`

export const PlusCircleIcon = styled(AntDesignIcon).attrs(({ theme }) => ({
  size: fontSize(2),
  color: theme.colors.primary,
}))``;