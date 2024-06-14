import { Theme } from "./src/theme/default";
import { PaperProvider } from "react-native-paper";
import { AppRoutes } from "./src/routes";
import { ThemeProvider } from "styled-components/native";
import { AuthContentProvider } from "./src/context/AuthContext";
import { PrivacyContextProvider } from "./src/context/PrivacyContext";
import { PartnersContextProvider } from "./src/context/PartnersContext";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PartnerFilterContextProvider } from "./src/context/PartnersFilterContext";
import { UserContextProvider } from "./src/context/userContext";
import { CompaniesContextProvider } from "./src/context/CompaniesContext";
import { CompaniesFilterContextProvider } from "./src/context/CompaniesFilterContext";


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <PaperProvider
        settings={{
          rippleEffectEnabled: true,
        }}
      >
        <GestureHandlerRootView style={{ flex: 1, height:"auto" }}>
            <PrivacyContextProvider>
              
                < UserContextProvider>
                <AuthContentProvider>
                  <PartnersContextProvider>
                    <PartnerFilterContextProvider>
                      <CompaniesContextProvider>
                        <CompaniesFilterContextProvider>
                          <AppRoutes />
                        </CompaniesFilterContextProvider>
                      </CompaniesContextProvider>
                    </PartnerFilterContextProvider>
                  </PartnersContextProvider>
                  </AuthContentProvider>
                </UserContextProvider>
            
            </PrivacyContextProvider>
        </GestureHandlerRootView>
      </PaperProvider>
    </ThemeProvider>
  );
}
