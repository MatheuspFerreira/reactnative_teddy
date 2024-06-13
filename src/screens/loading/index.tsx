import {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { storageOnboardingGet } from "../../storage/storage-onboarding";
import { RootStackPublicParamList } from "../../@types/Routes";
import BG from "../../../assets/login/logo.png";
import {
  OverLay,
  AnimatedBackGround,
  AnimatedText,
} from "./styles";

export function LoadingScreen() {
  const navigation = useNavigation<NavigationProp<RootStackPublicParamList, "Loading">>();

  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.3);
  const scaleImg = useSharedValue(0.3);
  const progress = useSharedValue(-0.2);
  const transition = useSharedValue(-80);

  const reanimatedStyleBackGround = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${progress.value * Math.PI}rad` },
      ],
    };
  }, []);

  const reanimatedStyleText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: transition.value }],
    };
  }, []);

  function animateValues(targetValue: number, duration: number) {
    return withRepeat(withTiming(targetValue, { duration }), 1, false);
  };

  const handleNavigation = async () => {
    try {
      const isGoingToLogin = await storageOnboardingGet();

      const screen = isGoingToLogin ? "Login" : "Onboarding";

      navigation.navigate(screen);
    } catch (error) {
      throw error;
    }
  };

  const onAnimation = () => {
    setTimeout(() => {
      handleNavigation();
    }, 2000);
  };

  useEffect(() => {
    onAnimation();
  }, []);

  useEffect(() => {
    scale.value = animateValues(1.2, 900);
    scaleImg.value = animateValues(1.2, 900);
    progress.value = animateValues(0, 900);
    transition.value = animateValues(1, 1100);
    opacity.value = animateValues(1, 1200);
  }, []);

  return (
    <OverLay>
      <AnimatedBackGround
        style={reanimatedStyleBackGround}
        source={BG}
        resizeMode={"contain"}
      />
      <AnimatedText style={[reanimatedStyleText]}>Teddy  360°</AnimatedText>
    </OverLay>
  );
}
