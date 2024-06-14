import React from 'react';
import { ActionButton } from "../../../../components/button/actionButton";
import { Modal } from "../../../../components/modal";
import { useLoading } from "../../../../hooks/useLoading";
import { Dialog, Checkbox } from "react-native-paper";
import { Dispatch } from "react";
import { Container, Title, Text, Form } from "./styled";
import { Input } from "./styled";
import { useForm, Controller, UseControllerReturn, FieldValues, FieldError } from "react-hook-form";
import { handleApiError } from "../../../../utils/helpers/handleApiError";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { CompanyType } from "../../../../context/types/CompaniesContext";
import { useCompaniesContext } from "../../../../context/CompaniesContext";
import { KeyboardTypeOptions } from "react-native";

export type ISubmitData = {
    companyName: string;
    collaboratorsCount: string;
    isActive: boolean;
}

type EditCompanyProps = {
    company: CompanyType;
    visible: boolean;
    setVisible: Dispatch<React.SetStateAction<boolean>>;
}

type RenderInputWithErrorsProps<TFieldValues extends FieldValues> = {
    fieldProps: UseControllerReturn<TFieldValues, any>["field"];
    label: string;
    error: FieldError | undefined;
    keyboardType?: KeyboardTypeOptions;
};

export function EditCompany({ company, visible, setVisible }: EditCompanyProps) {
    const { loading, setLoading } = useLoading();
    const { handleEditCompanyByID, fetchAllCompanies, setLoading: setFetchAllLoading } = useCompaniesContext();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            companyName: company?.companyName || '',
            collaboratorsCount: company?.collaboratorsCount.toString() || '0',
            isActive: company?.isActive || false,
        }
    });

    const onSubmit = async (data: ISubmitData) => {
        try {
            setLoading(true);
            await handleEditCompanyByID({ id: company.id, form: data });
            setVisible(false);
            
            setFetchAllLoading(true);
            await fetchAllCompanies();

        } catch (error) {
            handleApiError({ error, title: "" });
        } finally {
            setLoading(false);
            setVisible(false);
            setFetchAllLoading(false);
        };
    };

    const renderInputWithErrors = <TFieldValues extends FieldValues>({ fieldProps, label, error, keyboardType }: RenderInputWithErrorsProps<TFieldValues>) => (
        <>
            <Input
                label={label}
                maxLength={100}
                mode="outlined"
                onBlur={fieldProps.onBlur}
                onChangeText={fieldProps.onChange}
                value={fieldProps.value}
                keyboardType={keyboardType}
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
                            name="companyName"
                            rules={{ required: 'Você precisa preencher Nome da empresa' }}
                            render={({ field, fieldState }) => renderInputWithErrors({ fieldProps: field, label: 'Nome', error: fieldState.error })}
                        />
                        <Controller
                            control={control}
                            name="collaboratorsCount"
                            rules={{ required: 'Você precisa informar o número de colaboradores' }}
                            render={({ field, fieldState }) => renderInputWithErrors({ fieldProps: field, label: 'Colaboradores', error: fieldState.error, keyboardType: 'number-pad' })}
                        />
                        <Controller
                            control={control}
                            name="isActive"
                            render={({ field }) => (
                            
                                <Checkbox.Item
                                    label={field.value ? "Empresa Ativa" : "Empresa Desativada"}
                                    status={field.value ? 'checked' : 'unchecked'}
                                    onPress={() => field.onChange(!field.value)}
                                    uncheckedColor='black'
                                />
                            
                            )}
                        />

                    </Form>
                </Container>
                <Dialog.Actions>
                    <ActionButton destructive onPress={() => setVisible(false)} disabled={loading}>
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
