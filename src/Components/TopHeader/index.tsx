import React from "react";
import {
  BsFillTelephoneFill,
  BsFillGeoAltFill,
  BsCurrencyDollar,
  BsPerson,
} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

import {
  ButtonHeader,
  Container,
  Content,
  LeftUL,
  Li,
  RightUL,
  Row,
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
                <BsPerson size={12} color="#D10024" /> My Account
              </ButtonHeader>
            </Li>
          </RightUL>
        </Content>
      </Container>
    </>
  );
};

export default TopHeader;
