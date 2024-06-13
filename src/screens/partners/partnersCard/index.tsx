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
import { IPartners } from "../../../interface/IPartners";
import { useLoading } from "../../../hooks/useLoading";
import { usePartnersContext } from "../../../context/PartnersContext";
import { handleApiError } from "../../../utils/helpers/handleApiError";
import { Loading } from "../../../components/loading";
import { Theme } from "../../../theme/default";
import { useIsConnected } from "../../../hooks/useIsConnected";
import { EditPartner } from "./edit";
import { useModal } from "../../../hooks/useModal";

type PartnerCardProps = {
  partner: IPartners;
};

export function PartnerCard({ partner }: PartnerCardProps) {
  const { id, name, repositoryGit, urlDoc } = partner;
  const { loading, setLoading } = useLoading();
  const { visible, setVisible } = useModal();
  const { handleDeletePartnerByID } = usePartnersContext();

  const handleDeletePartner = async () => {
    try {
      setLoading(true);

      const isConnected = await useIsConnected('Você precisa estar conectado a uma rede para deletar um parceiro.');
      if(!isConnected) return;

      const { id } = partner; 

      await handleDeletePartnerByID(id);
      
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

          <EditPartner partner={partner} visible={visible} setVisible={setVisible} />

        </Container>
  
      )}
    >
      <Card>
        <IconContainer>
          <Icon name="people" />
          <IconText numberOfLines={1} adjustsFontSizeToFit ellipsizeMode="tail">
            {id ? id : "--"}
          </IconText>
        </IconContainer>
        <TextContainer>
          <TextHighlight numberOfLines={1} ellipsizeMode="tail">
            Nome: <Text>{name ? name : "--"}</Text>
          </TextHighlight>
          <TextHighlight
            numberOfLines={1}
            adjustsFontSizeToFit
            ellipsizeMode="tail"
          >
            Repositório: <Text>{repositoryGit ? repositoryGit : "--"}</Text>
          </TextHighlight>
          <TextHighlight
            numberOfLines={1}
            adjustsFontSizeToFit
            ellipsizeMode="tail"
          >
            Url: <Text>{urlDoc ? urlDoc : "--"}</Text>
          </TextHighlight>
        </TextContainer>
      </Card>
    </Swipeable>
  );
}
