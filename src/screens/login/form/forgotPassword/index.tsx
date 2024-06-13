import { Alert, TouchableOpacity } from "react-native";
import { Control, FieldValues } from "react-hook-form";
import { ActivityIndicator } from "react-native-paper";

import { ForgotPassWordText, LoadingContainer } from "./styles";

import { useLoading } from "../../../../hooks/useLoading";
import { Theme } from "../../../../theme/default";

import { handleApiError } from "../../../../utils/helpers/handleApiError";
import { fontSize } from "../../../../utils/styles/fontSize";
import { UserType } from "../../../../context/types/UserContext";



type ForgotPasswordType = {
  form: Control<FieldValues, {user:UserType, password:string}, FieldValues>;
};

export function ForgotPassword({ form }: ForgotPasswordType) {
  const { loading, setLoading } = useLoading();
 
  const handleTypeAlert = () => {
    const { user } = form._formValues;

    if (!user) {
      Alert.alert(
        "Envie suas credenciais",
        "Você precisa informar seu usuário para redefinir a senha.",
        [
          { 
            text: "OK" 
          }
        ]
      );
      return;
    };

    handleIosAlert();

  };

  async function handleRecoveryPassword() {
    try {
      const { user } = form._formValues;
        
      setLoading(true);
      
      Alert.alert("Senha recuperada com sucesso!", "Um e-mail foi enviado para o usuário informado.", [{ text: "OK" }]);

    } catch (error) {
      handleApiError({error, title:"Atenção"})

    } finally {
      setLoading(false);
    };

  };

  function handleIosAlert() {
    Alert.alert("Confirmação", "Deseja realmente recuperar sua senha?", [
      {
        text: "Não",
        style: "destructive",
      },
      {
        text: "Sim",
        onPress: handleRecoveryPassword,
      },
    ]);
  };

  return (
    <>

      {loading ? (
        <LoadingContainer>
          <ActivityIndicator animating={true} color={Theme.colors.primary} size={fontSize(2.2)} />

          <ForgotPassWordText>Aguarde...</ForgotPassWordText>
        </LoadingContainer>
      ) : (
        <TouchableOpacity onPress={handleTypeAlert}>
          <ForgotPassWordText>Esqueceu sua Senha ?</ForgotPassWordText>
        </TouchableOpacity>
      )}
    </>
  );
}
