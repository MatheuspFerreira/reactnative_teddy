import { Dialog } from "react-native-paper";
import { Modal } from "../../../components/modal";
import { ActionButton } from "../../../components/button/actionButton";
import { Input } from "../../../components/input/inputText";
import { Container, Label } from "./styled";
import { usePartnerFilterContext } from "../../../context/FilterContext";


export function Filter () {
    const { 
        selectedId, 
        setSelectedId, 
        loading, 
        visible, 
        setVisible,
        isFiltred,
        handleFilter, 
        handleClearFilter
    } = usePartnerFilterContext();

    const handleSelectId = (text:string) => {
        const numericText = text.replace(/[^0-9]/g, '');
        setSelectedId(numericText);
    };

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <Dialog.Content>
                <Container>
                    <Label>
                        Filtrar:
                    </Label>
                    
                    <Input 
                        value={selectedId} 
                        onChangeText={handleSelectId} 
                        placeholder="Digite o ID do parceiro"
                        keyboardType="numeric"
                        
                    />

                </Container>
            
            </Dialog.Content>

            <Dialog.Actions>
                {
                    !isFiltred
                    ?
                    <>
                        <ActionButton onPress={() => setVisible(false)} destructive disabled={loading}>
                            Cancelar
                        </ActionButton>
                        <ActionButton onPress={handleFilter} disabled={loading}>
                            {loading ? 'Aguarde...' : 'Filtrar'}
                        </ActionButton>
                    </>
                    :
                    isFiltred
                    &&
                    <ActionButton onPress={handleClearFilter} destructive disabled={loading}>
                        {loading ? 'Aguarde...' : 'Limpar filtro'}
                        
                    </ActionButton>

                }
            </Dialog.Actions>

        </Modal>

    )
}