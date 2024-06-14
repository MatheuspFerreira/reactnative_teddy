import { createStackNavigator } from "@react-navigation/stack";
import { RootStackPublicParamList } from "../@types/Routes";
import { OnboardingScreen } from "../screens/onboarding";
import { LoadingScreen } from "../screens/loading";
import { LoginScreen } from "../screens/login";
import { OnboardingContextProvider } from "../context/OnBoardingContext";
import { useAuthContext } from "../context/AuthContext";


const Stack = createStackNavigator<RootStackPublicParamList>();

export function PublicRoutes() {
  const { initialScreen } = useAuthContext();

  return (
    <Stack.Navigator
      initialRouteName={initialScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Loading" component={LoadingScreen} />

      <Stack.Screen name="Onboarding" component={OnboardingScreenWithContext} />

      <Stack.Screen name="Login" component={LoginScreen} />

    </Stack.Navigator>
  );
}

const OnboardingScreenWithContext = () => {
  return (
    <OnboardingContextProvider>
      <OnboardingScreen />
    </OnboardingContextProvider>
  );
};
