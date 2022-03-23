// Importação da bibliotecas do react
import React from "react";
// Importação das bibliotecas do react-icons
import {
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsCurrencyDollar,
  BsPerson,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

// Importação dos meus componentes estilizados usando o styled components
import {
  ButtonHeader,
  Container,
  Content,
  LeftUL,
  Li,
  RightUL,
} from "./styles";

interface TopHeaderProps {
  phone: string;
  address: string;
  email: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ phone, address, email }) => {
  return (
    <>
      <Container>
        <Content>
          <LeftUL>
            <Li>
              <ButtonHeader href="#">
                <BsFillTelephoneFill size={12} color="#D10024" /> {phone}
              </ButtonHeader>
            </Li>
            <Li>
              <ButtonHeader href="#">
                <AiOutlineMail size={12} color="#D10024" /> {email}
              </ButtonHeader>
            </Li>
            <Li>
              <ButtonHeader href="#">
                <BsFillGeoAltFill size={12} color="#D10024" /> {address}
              </ButtonHeader>
            </Li>
          </LeftUL>
          <RightUL>
            <Li>
              <ButtonHeader href="#">
                <BsCurrencyDollar size={12} color="#D10024" /> R$
              </ButtonHeader>
            </Li>
            <Li>
              <ButtonHeader href="#">
                <BsPerson size={12} color="#D10024" /> Minha conta
              </ButtonHeader>
            </Li>
          </RightUL>
        </Content>
      </Container>
    </>
  );
};

export default TopHeader;
