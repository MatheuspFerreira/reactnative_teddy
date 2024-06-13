import { ActionButton } from "../../../../components/button/actionButton";
import { Modal } from "../../../../components/modal";
import { useLoading } from "../../../../hooks/useLoading";
import { Dialog } from "react-native-paper";
import { Dispatch, useState } from "react";
import { Container, Title, Text, Form, ChipView, PlusCircleButton, PlusCircleIcon, InputContainer } from "./styled";
import { Input } from "./styled";
import { ScrollView} from "react-native";
import { useForm, Controller, UseControllerReturn, FieldValues, FieldError } from "react-hook-form";
import { handleApiError } from "../../../../utils/helpers/handleApiError";
import { usePartnersContext } from "../../../../context/PartnersContext";
import { IPartners } from "../../../../interface/IPartners";
import { Chip } from 'react-native-paper';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { fontSize } from "../../../../utils/styles/fontSize";

export type ISubmitData = {
    name: string;
    description: string;
    repositoryGit: string;
    urlDoc: string;
    clients: (string | number)[];
    projects: (string | number) [];
}

type EditPartnerProps = {
    partner: IPartners;
    visible: boolean;
    setVisible: Dispatch<React.SetStateAction<boolean>>;
}

type RenderInputWithErrorsProps<TFieldValues extends FieldValues> = {
    fieldProps: UseControllerReturn<TFieldValues, any>["field"];
    label: string;
    error: FieldError | undefined;
};

export function EditPartner({ partner, visible, setVisible }: EditPartnerProps) {
    const { loading, setLoading } = useLoading();
    const { handleEditPartnerByID, fetchAllPartners, setLoading: setFetchAllLoading } = usePartnersContext();
    const { control, handleSubmit, formState: { errors }, setValue, getValues } = useForm({
        defaultValues: {
            name: partner?.name || '',
            description: partner?.description || '',
            repositoryGit: partner?.repositoryGit || '',
            urlDoc: partner?.urlDoc || '',
            clients: partner?.clients || [],
            projects: partner?.projects || [],
        }
    });

    const [clientInput, setClientInput] = useState('');
    const [projectInput, setProjectInput] = useState('');

    const originalClients = partner?.clients || [];
    const originalProjects = partner?.projects || [];

    const onSubmit = async (data: ISubmitData) => {
        try {
            setLoading(true);
            await handleEditPartnerByID({ id: partner.id, form: data });
            setVisible(false);
            await reloadPartners();
        } catch (error) {
            handleApiError({ error, title: "" });
        } finally {
            setLoading(false);
        }
    };

    const reloadPartners = async () => {
        setFetchAllLoading(true);
        await fetchAllPartners();
        setFetchAllLoading(false);
    };

    const handleRemoveItem = (item: string | number, type: 'clients' | 'projects') => {
        const currentItems = getValues(type);
        setValue(type, currentItems.filter((current: string | number) => current !== item));
    };

    const handleAddItem = (itemInput: string, type: 'clients' | 'projects') => {
        if (itemInput.trim()) {
            const currentItems = getValues(type);
            setValue(type, [...currentItems, itemInput.trim()]);
            type === 'clients' ? setClientInput('') : setProjectInput('');
        }
    };

    const handleCancel = () => {
        setValue('clients', originalClients);
        setValue('projects', originalProjects);
        setVisible(false);
    };

    const renderInputWithErrors = <TFieldValues extends FieldValues>({ fieldProps, label, error }: RenderInputWithErrorsProps<TFieldValues>) => (
    <>
        <Input
            label={label}
            maxLength={100}
            mode="outlined"
            onBlur={fieldProps.onBlur}
            onChangeText={fieldProps.onChange}
            value={fieldProps.value}
        />
        {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
    </>
    );

    return (
        <Modal visible={visible} setVisible={setVisible}>
            <KeyboardAwareScrollView extraScrollHeight={100} enableOnAndroid={true} keyboardShouldPersistTaps='handled'>
                <Container>
                    <Title>Editar Parceiro</Title>
                    <Form>
                        <Controller
                            control={control}
                            name="name"
                            rules={{ required: 'Você precisa preencher Nome' }}
                            render={({ field, fieldState }) => renderInputWithErrors({fieldProps:field, label:'Nome', error:fieldState.error})}
                        />
                        <Controller
                            control={control}
                            name="description"
                            rules={{ required: 'Você precisa preencher Descrição' }}
                            render={({ field, fieldState }) => renderInputWithErrors({fieldProps:field, label:'Descrição', error:fieldState.error})}
                        />
                        <Controller
                            control={control}
                            name="repositoryGit"
                            rules={{ required: 'Você precisa preencher Repositório Git' }}
                            render={({ field, fieldState }) => renderInputWithErrors({fieldProps:field, label:'Repositório Git', error:fieldState.error})}
                        />
                        <Controller
                            control={control}
                            name="urlDoc"
                            rules={{ required: 'Você precisa preencher Url Doc' }}
                            render={({ field, fieldState }) => renderInputWithErrors({fieldProps:field, label:'Url Doc', error:fieldState.error})}
                        />

                        <Controller
                            control={control}
                            name="clients"
                            render={({ field }) => (
                                <>
                                    <InputContainer>
                                        <Input
                                            label={'Clientes'}
                                            placeholder="Digite e clique para incluir"
                                            mode="outlined"
                                            onBlur={field.onBlur}
                                            onChangeText={(text) => {
                                                setClientInput(text);
                                                field.onChange(getValues('clients'));
                                            }}
                                            value={clientInput}
                                        />
                                        <PlusCircleButton onPress={() => handleAddItem(clientInput, 'clients')}>
                                            <PlusCircleIcon name="pluscircle" />
                                        </PlusCircleButton>
                                    </InputContainer>
                                    {
                                        getValues('clients') && getValues('clients').length > 0
                                        ?
                                        <ScrollView  style={{maxHeight:120}} contentContainerStyle={{ flexGrow: 1 }} persistentScrollbar={true}>
                                            <ChipView>
                                                {getValues('clients').map((client, index) => (
                                                    <Chip key={index} icon="close" onPress={() => handleRemoveItem(client, 'clients')} textStyle={{ fontSize: fontSize(0.7) }}>
                                                        {client}
                                                    </Chip>
                                                ))}
                                            </ChipView>
                                        </ScrollView>
                                        :
                                        <Text>
                                            Nenhum projeto cadastrado.
                                        </Text>
                                    }
                                </>
                            )}
                        />
                        <Controller
                            control={control}
                            name="projects"
                            render={({ field }) => (
                                <>
                                    <InputContainer>
                                        <Input
                                            label={'Projetos'}
                                            placeholder="Digite e clique para incluir"
                                            mode="outlined"
                                            onBlur={field.onBlur}
                                            onChangeText={(text) => {
                                                setProjectInput(text);
                                                field.onChange(getValues('projects'));
                                            }}
                                            value={projectInput}
                                        />
                                        <PlusCircleButton onPress={() => handleAddItem(projectInput, 'projects')}>
                                            <PlusCircleIcon name="pluscircle" />
                                        </PlusCircleButton>
                                    </InputContainer>

                                    { 
                                        getValues('projects') && getValues('projects').length > 0 
                                        ?
                                        <ScrollView  contentContainerStyle={{ flexGrow: 1 }} persistentScrollbar={true}>
                                            <ChipView>
                                                {getValues('projects').map((project, index) => (
                                                    <Chip key={index} icon="close" onPress={() => handleRemoveItem(project, 'projects')} textStyle={{ fontSize: fontSize(0.7) }}>
                                                        {project}
                                                    </Chip>
                                                ))}
                                            </ChipView>
                                        </ScrollView>
                                        :
                                        <Text>
                                            Nenhum projeto cadastrado.
                                        </Text>
                                    }
                                </>
                            )}
                        />
                    </Form>
                </Container>
                <Dialog.Actions>
                    <ActionButton destructive onPress={handleCancel} disabled={loading}>
                        Cancelar
                    </ActionButton>
                    <ActionButton onPress={handleSubmit(onSubmit)} disabled={loading}>
                        {loading ? 'Aguarde...' : 'Editar'}
                    </ActionButton>
                </Dialog.Actions>
            </KeyboardAwareScrollView>
        </Modal>
    );
}
