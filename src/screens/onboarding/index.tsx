import { StatusBar } from "expo-status-bar";
import { Theme } from "../../theme/default";
import { OnBoarding } from "../../components/onboarding";
import { OverLay, CardText, ContainerText } from "./styles";
import ImgStudent from "../../../assets/onboarding/Dashboard-2.png";
import ImgAnalytics from "../../../assets/onboarding/statistics.png";
import { useOnBoardingContext } from "../../context/OnBoardingContext";


export function OnboardingScreen() {
  const { onBoarding } = useOnBoardingContext();

  return (
    <OverLay>
      <StatusBar style="light" backgroundColor={Theme.colors.primary} />

      {onBoarding === 1 ? (
        
        <OnBoarding
          imgPath={ImgAnalytics}
        >
          <ContainerText>
            <CardText>Tenha acesso rápido aos indicadores,</CardText>
            <CardText>tais como o tempo de permanência</CardText>
            <CardText>e as estatísticas de cadastro </CardText>
            <CardText>e atualização de empresas.</CardText>  
          </ContainerText>
        </OnBoarding>

      ) : (
        onBoarding === 2 && (
          
          <OnBoarding
            imgPath={ImgStudent}
          >
            <ContainerText>
              <CardText>Ative notificações para receber</CardText>
              <CardText> alertas instantâneos toda vez que </CardText>
              <CardText>novos parceiros ou empresas forem</CardText>
              <CardText>cadastrados ou atualizados no sistema.</CardText>
            </ContainerText>
          </OnBoarding>
        )
      )}
    </OverLay>
  );
}
