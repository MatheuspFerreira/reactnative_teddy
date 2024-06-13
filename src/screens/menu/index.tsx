import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FeatherIcons from "react-native-vector-icons/Feather";
import AntDIncons from "react-native-vector-icons/AntDesign";
import { Alert } from "react-native";

import { CardContainer, CardText, OverLay, Wrapper } from "./styles";
import { fontSize } from "../../utils/styles/fontSize";
import { Theme } from "../../theme/default";
import { MenuHeader } from "./header";
import { Card } from "./card";

import { NavigateParamsType } from "./types/NavigateParamsType";
import { useAuthContext } from "../../context/AuthContext";
import { RootStackParamList } from "../../@types/Routes";
import {
  NavigationProp,
  useNavigation,
} from "@react-navigation/native";


const menuOptions = [
  {
    screen: "About",
    icon: (
      <FontAwesome
        name={"user-circle-o"}
        size={fontSize(2.6)}
        color={Theme.colors.primary}
      />
    ),
    text: `Sobre Aplicação`,
  },
  {
    screen: "Setting",
    icon: (
      <AntDIncons
        name={"setting"}
        size={fontSize(2.6)}
        color={Theme.colors.primary}
      />
    ),
    text: "Opções",
  },
  {
    screen: "Privacy",
    icon: (
      <FeatherIcons
        name={"shield"}
        size={fontSize(2.7)}
        color={Theme.colors.primary}
      />
    ),
    text: "Privacidade",
  },
  {
    screen: null,
    icon: (
      <MaterialIcons
        name={"logout"}
        size={fontSize(2.7)}
        color={Theme.colors.primary}
      />
    ),
    text: "Sair",
  },

] as const;

export function MenuScreen() {
  const { toggleLogout } = useAuthContext();
  const navigation = useNavigation<NavigationProp<RootStackParamList, "StackMenu">>();

  const handleIsLogOut = () => {
    Alert.alert("Sair", "Deseja realmente sair?", [
      {
        text: "Não",
        style: "destructive",
      },
      {
        text: "Sim",
        onPress: toggleLogout,
      },
    ]);
  };

  const handleNavigation = ({ screen }: NavigateParamsType) => {
    if(screen === "Setting") return;
    navigation.navigate(screen);
  };

  return (
    <OverLay>
      
      <Wrapper>

        <MenuHeader />
 
        <CardContainer>
          {menuOptions.map((current, currentIndex) => {
            const hasScreen = current.screen;
            return (

              <Card
                onPress={() =>
                  hasScreen
                    ? handleNavigation({ screen: current.screen })
                    : handleIsLogOut()
                }
                key={currentIndex}
                
              >
                {current.icon}
                
                <CardText>{current.text}</CardText>
              </Card>
              
            );
          })}
        </CardContainer>
      </Wrapper>
      
    </OverLay>
  );
}
