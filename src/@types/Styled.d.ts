import "styled-components/native";
import { Theme } from "../theme/default";

type ThemeProps = typeof Theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeProps {}
}
