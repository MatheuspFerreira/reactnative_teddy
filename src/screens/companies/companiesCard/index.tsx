import React from "react";
import { Card } from "../../../components/card";
import {
  IconContainer,
  IconText,
  Icon,
  TextContainer,
  Text,
  TextHighlight,
  Swipeable,
  TouchableOpacity,
  SwipeableIcon,
  Container,
  TouchableOpacityEdit
} from "./styled";
import { useLoading } from "../../../hooks/useLoading";
import { handleApiError } from "../../../utils/helpers/handleApiError";
import { Loading } from "../../../components/loading";
import { Theme } from "../../../theme/default";
import { useIsConnected } from "../../../hooks/useIsConnected";
import { useModal } from "../../../hooks/useModal";
import { CompanyType, useCompaniesContext } from "../../../context/CompaniesContext";
import { EditCompany } from "./edit";

type CompanyCardProps = {
  company: CompanyType;
};

export function CompanyCard({ company }: CompanyCardProps) {
  const { id, companyName, isActive, collaboratorsCount } = company;
  const { loading, setLoading } = useLoading();
  const { visible, setVisible } = useModal();
  const { handleDeleteCompanyByID } = useCompaniesContext();

  const handleDeletePartner = async () => {
    try {
      setLoading(true);

      const isConnected = await useIsConnected('Você precisa estar conectado a uma rede para deletar um parceiro.');
      if(!isConnected) return;

      await handleDeleteCompanyByID(id);
      
    } catch (error) {
      handleApiError({error, title:"Erro ao deletar o parceiro"})
      
    }finally {
      setLoading(false);
    };
  };


  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={ () => (
        <Container>
          <TouchableOpacity disabled={loading}  onPress={handleDeletePartner}>
            { loading ? <Loading size={25} color={Theme.colors.secondary}/> : <SwipeableIcon name='trash-can-outline'/> }
          </TouchableOpacity>
          <TouchableOpacityEdit onPress={()=> setVisible(true)}>
            <SwipeableIcon name='square-edit-outline'/>
          </TouchableOpacityEdit>

          <EditCompany company={company} visible={visible} setVisible={setVisible} />

        </Container>
  
      )}
    >
      <Card>
        <IconContainer>
          <Icon name="business-outline" />
          <IconText numberOfLines={1} adjustsFontSizeToFit ellipsizeMode="tail">
            {id ? id : "--"}
          </IconText>
        </IconContainer>
        <TextContainer>
          <TextHighlight numberOfLines={1} ellipsizeMode="tail">
            Empresa: <Text>{companyName ? companyName  : "--"}</Text>
          </TextHighlight>
          <TextHighlight
            numberOfLines={1}
            adjustsFontSizeToFit
            ellipsizeMode="tail"
          >
            Número de colaboradores: <Text>{collaboratorsCount ? collaboratorsCount.toString().padStart(2,"0") : "--"}</Text>
          </TextHighlight>
          <TextHighlight
            numberOfLines={1}
            adjustsFontSizeToFit
            ellipsizeMode="tail"
          >
            Status: <Text>{isActive ? "SIM" : "Não"}</Text>
          </TextHighlight>
        </TextContainer>
      </Card>
    </Swipeable>
  );
}
