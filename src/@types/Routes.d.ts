import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackPublicParamList = {
  Loading: undefined;
  Onboarding: undefined;
  Login: undefined;
  Outdated: undefined;
};

export type RootTabParamList = {
  Partners: undefined;
  Companies: undefined;
  Menu: NavigatorScreenParams<RootStackParamList>;
};

export type RootStackParamList = {
  StackMenu: undefined;
  About: undefined;
  Privacy: undefined;
};
