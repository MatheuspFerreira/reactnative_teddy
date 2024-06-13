import { Card as PaperCard } from 'react-native-paper';
import styled from 'styled-components/native';

export const CustomCard = styled(PaperCard)`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
    justify-content: center;
  
`
export const CustomCardContent = PaperCard.Content;

export const Container = styled.View`
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 15px;

`
