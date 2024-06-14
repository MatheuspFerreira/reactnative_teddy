import { Dialog } from "react-native-paper";
import { ActionButton } from "../../../components/button/actionButton";
import { Modal } from "../../../components/modal";
import { Loading } from "../../../components/loading";
import { Title, Text, LoadingContainer } from "./styled";
import { useCompaniesContext } from "../../../context/CompaniesContext";


export function CreateCompany () {
    const { modalLoading, visible, setVisible, handleCreateNewCompany } = useCompaniesContext();


    return(
        <Modal visible={visible} setVisible={setVisible}>
            <Dialog.Content style={{ gap: 10 }}>
                {modalLoading && visible ? (
                    <LoadingContainer>
                    <Loading size={44} />
                    <Title style={{ textAlign: "center" }}>
                        Estamos cadastrando uma nova empresa
                    </Title>
                    </LoadingContainer>
                ) : (
                    visible && (
                    <>
                        <Title>Criar Empresa</Title>
                        <Text>Você tem certeza que deseja criar uma nova empresa?</Text>
                    </>
                    )
                )}
            </Dialog.Content>
            {!modalLoading && visible && (
                <Dialog.Actions>
                    <ActionButton onPress={() => setVisible(false)} destructive>
                    Não
                    </ActionButton>
                    <ActionButton onPress={handleCreateNewCompany}>Sim</ActionButton>
                </Dialog.Actions>
            )}
      </Modal>
    )
}