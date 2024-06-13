import { Avatar } from "react-native-paper";
import {
  Container,
  ContainerText,
  ResponsibleText,
  Name,
  AvatarWrapper,
} from "./styles";
import { fontSize } from "../../../utils/styles/fontSize";
import { useUserContext } from "../../../context/userContext";

export function MenuHeader() {
  const { user } = useUserContext();

  return (
    <Container>
      <AvatarWrapper>
        <Avatar.Image 
          size={fontSize(7)}
          source={user.foto} 
        />
      </AvatarWrapper>
      <ContainerText>
        <ResponsibleText>Bem vindo,</ResponsibleText>
        <Name>{user.name}</Name>
      </ContainerText>
    </Container>
  );
}
