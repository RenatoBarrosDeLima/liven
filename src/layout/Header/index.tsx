import React from "react";

import TopHeader from "../../Components/TopHeader";
import Search from "../../Components/Search";
import Icons from "../../Components/Icons";
import Logo from "../../Components/Logo";

import {
  Col3,
  Col6,
  Container,
  HeaderContainer,
  HeaderContent,
  Row,
} from "./styles";

import { phone, address, email } from "../mockData";

const Header = () => {
  return (
    <>
      <Container>
        {/* TOP HEADER */}
        <TopHeader phone={phone} address={address} email={email} />
        {/* /TOP HEADER */}

        {/* MAIN HEADER */}
        <HeaderContainer>
          {/* container */}
          <HeaderContent>
            {/* row */}
            <Row>
              {/* LOGO */}
              <Col3>
                <Logo />
              </Col3>
              {/* /LOGO */}

              {/* SEARCH BAR */}
              <Col6>
                <Search />
              </Col6>
              {/* /SEARCH BAR */}

              {/* ICONS */}
              <Col3>
                <Icons />
              </Col3>
              {/* /ICONS */}
            </Row>
            {/* row */}
          </HeaderContent>
          {/* container */}
        </HeaderContainer>
        {/* /MAIN HEADER */}
      </Container>
    </>
  );
};

export default Header;
