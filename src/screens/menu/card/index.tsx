import { CardProps } from "./types/CardProps";
import { CardContent, CustomCard, TouchableOpacity } from "./styles";


export function Card({ children, onPress }: CardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <CustomCard>
        <CardContent>{children}</CardContent>
      </CustomCard>
    </TouchableOpacity>
  );
}
