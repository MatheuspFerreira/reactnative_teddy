import React, { ReactNode } from "react";
import {
  CustomCard,
  CustomCardContent,
  Container,
} from "./styled";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
 
    <CustomCard>
        <CustomCardContent>
          <Container>{children}</Container>
        </CustomCardContent>
    </CustomCard>

  );
}
