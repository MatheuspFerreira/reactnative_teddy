import styled from "styled-components/native";
import { fontSize } from "../../../utils/styles/fontSize";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import { Swipeable as GestureSwipeable } from "react-native-gesture-handler";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";


export const Swipeable  = styled(GestureSwipeable).attrs(({ theme }) => ({
  containerStyle:{
    width: "100%",
    backgroundColor:'red',
    borderRadius:12
  }
}))``;


export const Container = styled.View`
  width: 42%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  border-radius: 12px;
`;

export const TouchableOpacityEdit = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background-color: blue;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

`;


export const TouchableOpacity = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background-color: red;
  align-items: center;
  justify-content: center;
  border-radius: 12px;

`;

export const SwipeableIcon = styled(MaterialCommunityIcon).attrs(({ theme }) => ({
  size: fontSize(2.5),
  color: theme.colors.secondary
}))``;

export const IconContainer = styled.View`
  width: 30%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  gap:5px;
  padding: 5px;
`;

export const IconText = styled.Text`
  width: 45%;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: bold;
  font-size: ${fontSize(1.5)}px;

`;

export const Icon = styled(OcticonsIcons).attrs(({ theme }) => ({
  size: fontSize(2),
  color: theme.colors.secondary,
}))`
  width: auto;
`;

export const TextContainer = styled.View`
  width: 70%;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 400;
  font-size: ${fontSize(1.1)}px;
`;

export const TextHighlight = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: ${fontSize(1.15)}px;
`;

