import { Dimensions } from "react-native";

const { height } = Dimensions.get('window')
export const Responsiveness = (size:number) => (height * 0.014) * size;