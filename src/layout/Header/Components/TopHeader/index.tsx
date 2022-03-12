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

const TopHeader = () => {
  return (
    <>
      <Container>
        <Content>
          <Row>
            <LeftUL>
              <Li>
                <ButtonHeader href="#">
                  <BsFillTelephoneFill size={12} color="#D10024" />{" "}
                  +021-95-51-84
                </ButtonHeader>
              </Li>
              <Li>
                <ButtonHeader href="#">
                  <AiOutlineMail size={12} color="#D10024" /> email@email.com
                </ButtonHeader>
              </Li>
              <Li>
                <ButtonHeader href="#">
                  <BsFillGeoAltFill size={12} color="#D10024" /> 1734 Stonecoal
                  Road
                </ButtonHeader>
              </Li>
            </LeftUL>
            <RightUL>
              <Li>
                <ButtonHeader href="#">
                  <BsCurrencyDollar size={12} color="#D10024" /> USD
                </ButtonHeader>
              </Li>
              <Li>
                <ButtonHeader href="#">
                  <BsPerson size={12} color="#D10024" /> My Account
                </ButtonHeader>
              </Li>
            </RightUL>
          </Row>
        </Content>
      </Container>
    </>
  );
};

export default TopHeader;
