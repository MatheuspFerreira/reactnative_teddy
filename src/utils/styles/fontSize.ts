import { Dimensions } from "react-native";

const { height } = Dimensions.get('window')
export const fontSize = (size:number) => (height * 0.014) * size;