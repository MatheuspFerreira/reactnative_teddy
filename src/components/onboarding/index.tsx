import { SafeAreaView } from "react-native";
import { OnBoardingProps } from "./interface/OnBoardingProps";
import { OnboardingJourneyEnum, useOnBoardingContext } from "../../context/OnBoardingContext";
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
  
  const isFirstStepActivated =  onBoarding === OnboardingJourneyEnum.FIRST_STEP;
  const isSecondStepActivated =  onBoarding === OnboardingJourneyEnum.SECOND_STEP;

  const backButtonText = isFirstStepActivated ? "Pular" : "Voltar";
  const cardTitle = isFirstStepActivated ? "Um app para Gerenciar Parceiros e Empresas" : "Dashboard de Parceiros";

  
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
            <CircleIcon active={isFirstStepActivated} />
            <CircleIcon active={isSecondStepActivated} />
          </CardFeedBackContainer>
          <CardTitle>{cardTitle}</CardTitle>
          {children}
          <SafeAreaView style={{ width: "100%" }}>
            <CardFooter>
              <NextButton onPress={handleNavigateNextScreen}>
                <NextButtonText>{"Próximo"}</NextButtonText>
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


