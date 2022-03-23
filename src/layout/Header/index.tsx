// Importação das bibliotecas do react
import React from "react";

// Importação dos componentes criados
import Logo from "../../components/Logo";
import Icons from "../../components/Icons";
import Search from "../../components/Search";
import TopHeader from "../../components/TopHeader";

// Importação dos meus componentes estilizados usando o styled components
import {
  Col3,
  Col6,
  Container,
  HeaderContainer,
  HeaderContent,
  Row,
} from "./styles";

// Importação dos dados mockados
import { phone, address, email } from "../mockData";

const Header = () => {
  return (
    <>
      <Container>
        <TopHeader phone={phone} address={address} email={email} />

        <HeaderContainer>
          <HeaderContent>
            <Row>
              <Col3>
                <Logo />
              </Col3>

              <Col6>
                <Search />
              </Col6>

              <Col3>
                <Icons />
              </Col3>
            </Row>
          </HeaderContent>
        </HeaderContainer>
      </Container>
    </>
  );
};

export default Header;
