import { useInputSecureTextEntry } from "../../../hooks/useInputSecureTextEntry";
import { Responsiveness } from "../../../utils/styles/SizeResponsiveness";
import { handleApiError } from "../../../utils/helpers/handleApiError";
import { useAuthContext } from "../../../context/AuthContext";
import { useForm, Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";
import {
  OverLay,
  Title,
  Input,
  FormContainer,
  TitleContainer,
  Button,
  ButtonText,
  ButtonContainer,
  ErrorText,
} from "./styles";
import { ForgotPassword } from "./forgotPassword";
import { useLoading } from "../../../hooks/useLoading";
import { useIsConnected } from "../../../hooks/useIsConnected";
import { useUserContext } from "../../../context/userContext";
import { user } from "../../../utils/constants/user";

type IForm = {
  user: string;
  password: string;
};

export function Form() {
  const { secureTextEntry, toggleSecureTextEntry } = useInputSecureTextEntry();

  const { loading, setLoading } = useLoading();
  const { setIsSignedIn } = useAuthContext();
  const { handleSetUser } = useUserContext();
  const mockUser = user;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleVerifyCredentials = async (form: IForm) => {
    try {
      setLoading(true);

      const isConnected = await useIsConnected("É necessário estar conectado para realizar o login.");

      if (!isConnected) return;

      const { user, password } = form;

      await handleSetUser(mockUser);

      console.log({user, password})

      setIsSignedIn(true);

    } catch (error) {
      handleApiError({ error, title: "Erro no login" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <OverLay>
      <TitleContainer>
        <Title>Bem-vindo ao</Title>
        <Title>Teddy  360°</Title>
      </TitleContainer>
      <FormContainer>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              mode="outlined"
              label="Usuário"
              placeholder="Digite seu usuário"
              value={value}
              onChangeText={onChange}
              error={errors.user ? true : false}
              autoCapitalize="none"
            />
          )}
          name="user"
          rules={{ required: "Informe seu usuário." }}
        />

        {errors.user && (
          <ErrorText>{errors.user.message as unknown as string}</ErrorText>
        )}

        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              mode="outlined"
              label="Senha"
              placeholder="Digite sua senha"
              right={
                <TextInput.Icon
                  icon={secureTextEntry ? "eye-off-outline" : "eye-outline"}
                  color={"grey"}
                  style={{ marginTop: 15 }}
                  onPress={toggleSecureTextEntry}
                  size={Responsiveness(2.2)}
                />
              }
              autoCapitalize="none"
              onChangeText={onChange}
              value={value}
              error={errors.password ? true : false}
              secureTextEntry={secureTextEntry}
            />
          )}
          name="password"
          rules={{ required: "Informe sua senha." }}
        />

        {errors.password && (
          <ErrorText>{errors.password.message as unknown as string}</ErrorText>
        )}

        <ButtonContainer>
          <Button
            onPress={handleSubmit(handleVerifyCredentials)}
            loading={loading}
            disabled={loading}
          >
            <ButtonText>{loading ? "Aguarde..." : "Login"}</ButtonText>
          </Button>

          <ForgotPassword form={control} />
        </ButtonContainer>
      </FormContainer>
    </OverLay>
  );
}
