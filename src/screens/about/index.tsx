import {
  OverLay,
  Title,
  Text
} from "./styles";


export function About() {
  return (
    <OverLay>
      <Title>
        Sobre a Aplicação
      </Title>
      <Text>
        Estou empolgado em compartilhar detalhes sobre este projeto que estamos desenvolvendo. 
        Trata-se de uma aplicação de gerenciamento de cadastro de parceiros e empresas, 
        construída com algumas das melhores tecnologias disponíveis atualmente. 
        A jornada de desenvolvimento tem sido incrivelmente gratificante e cheia de aprendizado.

      </Text>

      <Title>
        Tecnologias Utilizadas
      </Title>
      <Text>
        React Native,
        Expo,
        React Native Reanimated,
        React Native Gesture Handler,
        React Native Paper,
        React Hook Form,
        React Native Navigation,
        AsyncStorage,
        NetInfo.
      </Text>

      <Title>
        Sobre o Projeto
      </Title>

      <Text>
        Este sistema de gerenciamento de cadastro de parceiros e empresas foi desenvolvido com foco na eficiência e 
        facilidade de uso. Utilizamos uma stack moderna para garantir uma aplicação rápida e confiável. 
        Cada tecnologia foi escolhida para proporcionar a melhor experiência ao usuário. 
      </Text>

    </OverLay>
  );
}
