import styled from "styled-components/native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { fontSize } from "../../utils/styles/fontSize";
import { IconButton } from "../../components/button/IconButton";
import { DataTable as PaperDataTable } from "react-native-paper";


export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 3%;
  padding-top: 5%;
  padding-bottom: 25%;
`;

export const PlusCircleButton = styled(IconButton)`
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 30%;
  left: 78%;
  z-index: 1;
`

export const PlusCircleIcon = styled(AntDesignIcon).attrs(({ theme }) => ({
  size: fontSize(5.5),
  color: theme.colors.primary,
}))``;

export const FilterButton = styled(IconButton)`
  width: 65px;
  height: 65px;
  position: absolute;
  bottom: 45%;
  left: 78%;
  z-index: 1;
  border-radius: 40px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};

`

export const FilterIcon = styled(MaterialCommunityIcon).attrs(({ theme }) => ({
  size: fontSize(3.5),
  color: theme.colors.primary,
}))``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: ${fontSize(1.4)}px;

`;

export const OverLay = styled.View`
  width: 100%;
  height: 75%;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap:10px;
`;


export const DataTable = styled(PaperDataTable)`
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  padding-top: 5%;

`;






