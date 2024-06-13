import {  RootTabParamList } from "../@types/Routes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Responsiveness } from "../utils/styles/SizeResponsiveness";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import { fontSize } from "../utils/styles/fontSize";
import { StackRoutes } from "./stack.routes";
import { Theme } from "../theme/default";
import { Partners } from "../screens/partners";
import { useUserContext } from "../context/userContext";
import { isIOSPlatform } from "../utils/helpers/isIOSPlatform";


const Tab = createBottomTabNavigator<RootTabParamList>();

export function TabsRoutes() {
  const { user } = useUserContext();
  const isIOS= isIOSPlatform();
  const gap = isIOS? 0 : Responsiveness(1);
  const maxHeight = isIOS ? "auto" : 80;
  const tabBarHeight = isIOS ? Responsiveness(7.35) : Responsiveness(6.6);

  return (
    <Tab.Navigator
      initialRouteName="Partners"
      screenOptions={{
        tabBarActiveTintColor: Theme.colors.primary,
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: fontSize(2.2),
          borderTopRightRadius: fontSize(2.2),
          borderTopWidth: 0,
          height: tabBarHeight,
          maxHeight: maxHeight,

          backgroundColor: "white",
          gap: gap,
          paddingTop: Responsiveness(1.2),
        },
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: fontSize(1.64),
          color: Theme.colors.text.primary,
          margin: 0,
        },
        tabBarLabelStyle: {
          fontSize: fontSize(1.3),
          backgroundColor: "white",
        },

        headerRight: () => (
          <></>
        ),
      }}
    >
      <Tab.Screen
        name="Partners"
        component={Partners}
        options={{
          headerTitle: `Bem vindo, ${user ? user.name : 'User name'}`,
          tabBarLabel: "Parceiros",
          tabBarIcon: ({ color }) => (
            <OcticonsIcons name="people" color={color} size={fontSize(2)} />
          ),
        }}
      />

      <Tab.Screen
        name="Business"
        component={Partners}
        options={{
          headerTitle: `Bem vindo, ${user ? user.name : 'User name'}`,
          tabBarLabel: "Empresas",
          tabBarIcon: ({ color }) => (
            <OcticonsIcons name="organization" color={color} size={fontSize(2)} />
          ),
        }}
      />

      <Tab.Screen
        name="Menu"
        component={StackRoutes}
        options={{
          headerTitle: "Menu",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <OcticonsIcons
              name="three-bars"
              color={color}
              size={fontSize(2)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
