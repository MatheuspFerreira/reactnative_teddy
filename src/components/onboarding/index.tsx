import { SafeAreaView } from "react-native";
import { OnBoardingProps } from "./interface/OnBoardingProps";
import { useOnBoardingContext } from "../../context/OnBoardingContext";
import {
  OverLay,
  Container,
  Image,
  CardContainer,
  ImageContainer,
  CardTitle,
  CardFeedBackContainer,
  CircleIcon,
  CardFooter,
  NextButton,
  NextButtonText,
  BackButton,
  BackButtonText,
} from "./styled";

export function OnBoarding({
  imgPath,
  children
}: OnBoardingProps) {
  const {
    onBoarding,
    handleNavigateNextScreen,
    handleNavigateGobackScreen,
  } = useOnBoardingContext();
  
  const nextButtonText = onBoarding == 1 ? "Próximo" : "Próximo";

  const backButtonText = onBoarding == 1 ? "Pular" : "Voltar";

  const cardTitle = onBoarding == 1 ? "Um app para Gerenciar Parceiros e Empresas" : "Dashboard de Parceiros";

  
  return (
    <OverLay>
    
      <Container>
        <ImageContainer>
          <Image
            source={imgPath}
            defaultSource={imgPath}
            resizeMode="contain"
          />
        </ImageContainer>
        <CardContainer>
          <CardFeedBackContainer>
            <CircleIcon active={onBoarding === 1} />
            <CircleIcon active={onBoarding === 2} />
          </CardFeedBackContainer>
          <CardTitle>{cardTitle}</CardTitle>
          {children}
          <SafeAreaView style={{ width: "100%" }}>
            <CardFooter>
              <NextButton onPress={handleNavigateNextScreen}>
                <NextButtonText>{nextButtonText}</NextButtonText>
              </NextButton>
              <BackButton onPress={handleNavigateGobackScreen}>
                <BackButtonText>{backButtonText}</BackButtonText>
              </BackButton>
            </CardFooter>
          </SafeAreaView>
        </CardContainer>
      </Container>
    </OverLay>
  );
}


