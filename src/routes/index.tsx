import { NavigationContainer } from "@react-navigation/native";
import { useAuthContext } from "../context/AuthContext";
import { PublicRoutes } from "./public.routes";
import { TabsRoutes } from "./tab.routes";

export function AppRoutes() {
  const { isSignedIn } = useAuthContext();

  return (
    <NavigationContainer>
      {!isSignedIn ? <PublicRoutes /> : <TabsRoutes />}
    </NavigationContainer>
  );
}
