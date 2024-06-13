import { Platform } from "react-native";

export function isIOSPlatform() {
  const isIOS = Platform.OS === "ios";

  return isIOS;
}
