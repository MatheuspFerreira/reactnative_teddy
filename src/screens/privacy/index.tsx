import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";
import { PrivacyOptions } from "./options";
import {
  Card,
  ContainerText,
  Header,
  HeaderTitle,
  OverLay,
  Section,
  SectionTitle,
  SectionText,
} from "./styles";
import { privacyText } from "../../utils/constants/privacyText";


export function Privacy() {
  return (
    <OverLay>
      <Card>
        <Header>
          <HeaderTitle>Política de Privacidade</HeaderTitle>
        </Header>
        <Divider style={{ borderBottomWidth: 0.19 }} />
        <ScrollView>
          <ContainerText>
            {privacyText.map((current) => {
              return (
                <Section key={current.title}>
                  <SectionTitle>{current.title}</SectionTitle>
                  <SectionText>{current.text}</SectionText>
                </Section>
              );
            })}
          </ContainerText>
        </ScrollView>
      </Card>

      <PrivacyOptions />

    </OverLay>
  );
}
