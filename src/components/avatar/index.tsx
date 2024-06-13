import { Avatar as AvatarPaper } from "react-native-paper";
import { fontSize } from "../../utils/styles/fontSize";
import { AvatarProps } from "./types/AvatarProps";
import {
  AvatarContainer,
  AvatarContent,
  Circle,
  Dot,
  Name,
  TagName,
} from "./styles";

export function Avatar({ isActive, name, src }: AvatarProps) {
  return (
    <AvatarContainer isActive={isActive}>
      <AvatarContent isActive={isActive}>
        <AvatarPaper.Image size={fontSize(6)} source={src} />
        <Circle isActive={isActive}>
          <Dot isActive={isActive} />
        </Circle>
      </AvatarContent>
      <TagName isActive={isActive}>
        <Name isActive={isActive}>{name}</Name>
      </TagName>
    </AvatarContainer>
  );
}