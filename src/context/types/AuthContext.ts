export interface AuthContextProps {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
  toggleLogout:() => void;
}

export type AuthContentProviderProps = {
  children: React.ReactNode;
};

