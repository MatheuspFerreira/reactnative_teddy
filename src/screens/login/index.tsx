import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Responsiveness } from "../../utils/styles/SizeResponsiveness";
import { OverLay, Image, FirstContent, LastContent } from "./styles";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Theme } from "../../theme/default";
import { Form } from "./form";
import Logo from "../../../assets/login/logo.png"

export function LoginScreen() {

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      enableAutomaticScroll={true}
      contentContainerStyle={{ flex: 1 }}
      style={{ backgroundColor: Theme.colors.primary }}
      extraScrollHeight={Responsiveness(5)}
      scrollEnabled={true}
    >
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={{ flex: 1 }}
      >
        <OverLay>
          <StatusBar style="dark" backgroundColor={"white"} />
          <FirstContent>

          <Image
            source={Logo}
            defaultSource={Logo}
            resizeMode="contain"
          />
            

          </FirstContent>

          <LastContent />

          <Form />
        </OverLay>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}
