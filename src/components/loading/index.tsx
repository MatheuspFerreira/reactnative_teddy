import { ActivityIndicator, ActivityIndicatorProps } from "react-native-paper";
import { fontSize } from "../../utils/styles/fontSize";
import { Theme } from "../../theme/default";

export function Loading({...rest}:ActivityIndicatorProps) {
  return (
    <ActivityIndicator
      animating={true}
      color={Theme.colors.primary}
      size={fontSize(1.87)}
      {...rest}
    />
  );
}
