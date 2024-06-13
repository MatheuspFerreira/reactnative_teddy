import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextInput } from 'react-native-paper';
import { Alert, View } from 'react-native';
import * as yup from 'yup';
import {
  ErrorText,
  Input,
  Form,
  FormFooter,
  Button,
  TextButton,
} from './styles'
import { useNewPasswordSecureEntry } from '../../hooks/useNewPasswordSecureEntry';
import { Responsiveness } from '../../utils/styles/SizeResponsiveness';
import { AppError } from '../../utils/appError';
import { storageFirstAccessChangePasswordSave, storageFirstAccessChangePasswordGet } from '../../storage/storage-firstAccessChangePassword';
import { useLoading } from '../../hooks/useLoading';

type NewPasswordFormProps = {
  buttonText: string;
  children?: React.ReactNode;
  toggleModalVisible: () => void;
  toggleLogout: () => void;
};

type FormData = {
  password?: string
  confirmPassword?: string
};

const validationSchema: yup.ObjectSchema<FormData> = yup.object().shape({
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'A senha deve ter ao menos 6 caracteres')
    .max(20, 'A senha deve ter no máximo 20 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter ao menos uma letra maiúscula')
    .matches(/\d/, 'A senha deve conter ao menos um número')
    .matches(
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/,
      'A senha deve conter pelo menos um caractere especial.',
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais')
    .required('Confirmação de senha é obrigatória'),
});

export function NewPasswordForm({
  children,
  buttonText,
  toggleModalVisible,
  toggleLogout
}: NewPasswordFormProps) {

  const { loading, setLoading } = useLoading();
  const { control, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(validationSchema), });
  const {
    secureTextEntryPassword,
    secureTextEntryConfirmPassword,
    toggleSecureTextEntryPassword,
    toggleSecureTextEntryConfirmPassword,
  } = useNewPasswordSecureEntry();

  async function onSubimit(data: FormData) {
    try {
      setLoading(true);
      const isFirstPasswordChanged = await storageFirstAccessChangePasswordGet();
      
      if(!isFirstPasswordChanged){
        await storageFirstAccessChangePasswordSave()
      }

      toggleModalVisible();
      toggleLogout();
      
      Alert.alert(
        "Senha alterada com sucesso!", 
        "Foi realizado um logoff para que você possa usar sua nova senha.", 
        [{ text: "OK" }]
      );
      
    } catch (error) {
      const isAppError = error instanceof AppError;

      const message = isAppError ? error.message : "Erro no servidor, tente novamente mais tarde.";

      Alert.alert("Atenção", message, [{ text: "OK" }]);
      
    }finally{
      setLoading(false);
    };
      
  };

  return (
    <Form>
      <View>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <Input
              mode="outlined"
              label="Nova senha"
              placeholder="Nova senha"
              value={value}
              onChangeText={onChange}
              right={
                <TextInput.Icon
                  icon={
                    secureTextEntryPassword ? 'eye-off-outline' : 'eye-outline'
                  }
                  color={'grey'}
                  style={{ marginTop: 15 }}
                  onPress={toggleSecureTextEntryPassword}
                  size={Responsiveness(2.2)}
                />
              }
              autoCapitalize="none"
              error={!!errors.password}
              secureTextEntry={secureTextEntryPassword}
            />
          )}
        />

        {errors.password && (
          <ErrorText>{errors.password.message as unknown as string}</ErrorText>
        )}
      </View>

      <View>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <Input
              mode="outlined"
              label="Repetir nova senha"
              placeholder="Repetir nova senha"
              value={value}
              onChangeText={onChange}
              right={
                <TextInput.Icon
                  icon={
                    secureTextEntryConfirmPassword ? 'eye-off-outline' : 'eye-outline'
                  }
                  color={'grey'}
                  style={{ marginTop: 15 }}
                  onPress={toggleSecureTextEntryConfirmPassword}
                  size={Responsiveness(2.2)}
                />
              }
              autoCapitalize="none"
              error={!!errors.password}
              secureTextEntry={secureTextEntryConfirmPassword}
            />
          )}
        />

        {errors.confirmPassword && (
          <ErrorText>{errors.confirmPassword.message}</ErrorText>
        )}
      </View>

      <FormFooter>
        <Button loading={loading} onPress={handleSubmit(onSubimit)} disabled={loading}>
          <TextButton>{loading ? 'Aguarde...' : buttonText}</TextButton>
        </Button>
        {children}
      </FormFooter>
    </Form>
  )
}
