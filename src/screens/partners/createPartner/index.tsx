import { Dialog } from "react-native-paper";
import { ActionButton } from "../../../components/button/actionButton";
import { Modal } from "../../../components/modal";
import { Loading } from "../../../components/loading";
import { Title, Text, LoadingContainer } from "./styled";
import { usePartnersContext } from "../../../context/PartnersContext";


export function CreatePartner () {
    const { modalLoading, visible, setVisible, handleCreateNewPartner } = usePartnersContext();


    return(
        <Modal visible={visible} setVisible={setVisible} >
            <Dialog.Content style={{ gap: 10 }} >
                {modalLoading && visible ? (
                    <LoadingContainer>
                    <Loading size={44} />
                    <Title style={{ textAlign: "center" }}>
                        Estamos cadastrando um novo parceiro
                    </Title>
                    </LoadingContainer>
                ) : (
                    visible && (
                    <>
                        <Title>Criar Parceiro</Title>
                        <Text>Você tem certeza que deseja criar um novo parceiro?</Text>
                    </>
                    )
                )}
            </Dialog.Content>
            {!modalLoading && visible && (
                <Dialog.Actions>
                    <ActionButton onPress={() => setVisible(false)} destructive>
                    Não
                    </ActionButton>
                    <ActionButton onPress={handleCreateNewPartner}>Sim</ActionButton>
                </Dialog.Actions>
            )}
      </Modal>
    )
}