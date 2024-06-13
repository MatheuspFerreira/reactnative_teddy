import { Theme } from "./src/theme/default";
import { PaperProvider } from "react-native-paper";
import { AppRoutes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { AuthContentProvider } from "./src/context/AuthContext";
import { LoadingScreenContextProvider } from "./src/context/LoadingContext";
import { PrivacyContextProvider } from "./src/context/PrivacyContext";
import { PartnersContextProvider } from "./src/context/PartnersContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PartnerFilterContextProvider } from "./src/context/FilterContext";
import { UserContextProvider } from "./src/context/userContext";


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PaperProvider
        settings={{
          rippleEffectEnabled: true,
        }}
      >
        <GestureHandlerRootView style={{ flex: 1, height:"auto" }}>
        <LoadingScreenContextProvider>
          <PrivacyContextProvider>
            <AuthContentProvider>
              < UserContextProvider>
       
                <PartnersContextProvider>
                  <PartnerFilterContextProvider>
                    <AppRoutes />
                  </PartnerFilterContextProvider>
                
                </PartnersContextProvider>
              </UserContextProvider>
            </AuthContentProvider>
          </PrivacyContextProvider>
        </LoadingScreenContextProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </ThemeProvider>
  );
}