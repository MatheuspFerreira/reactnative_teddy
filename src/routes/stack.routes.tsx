import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../@types/Routes";
import { fontSize } from "../utils/styles/fontSize";
import { Privacy } from "../screens/privacy";
import { MenuScreen } from "../screens/menu";
import { About } from "../screens/about";
import { Theme } from "../theme/default";


const Stack = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="StackMenu"
      screenOptions={{
        headerTitleStyle: {
          fontSize: fontSize(1.64),
          color: Theme.colors.text.primary,
        },
      }}
    >

      <Stack.Screen
        name="StackMenu"
        component={MenuScreen}
        options={{
          headerTitle: "Menu",
        }}
      />

      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerTitle: "Sobre Aplicação",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{
          headerTitle: "Privacidade",
          headerTitleAlign: "center",
        }}
      />

    </Stack.Navigator>
  );
}
