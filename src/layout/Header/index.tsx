// Importação das bibliotecas do react
import React from "react";

// Importação dos componentes criados
import Logo from "../../Components/Logo";
import Icons from "../../Components/Icons";
import Search from "../../Components/Search";
import TopHeader from "../../Components/TopHeader";

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
                {/* Component contendo a logo ficticia */}
                <Logo />
              </Col3>

              <Col6>
                {/* Componente com o form de pesquisa e botão de pesquisa  */}
                <Search />
              </Col6>

              <Col3>
                {/* Compoente com os ícones de favoritos e componente de carrinho com as compras  */}
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
