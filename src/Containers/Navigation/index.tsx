import React, { useState } from "react";

import {
  Container,
  Content,
  Nav,
  NavLink,
  NavResponsive,
  Navs,
} from "./styles";

import { menus } from "./mockData";

const Navigation = () => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <Content>
        <NavResponsive>
          <Navs>
            {menus?.map((menu, index) => {
              return (
                <Nav key={index} active={active === index ? true : false}>
                  <NavLink onClick={() => setActive(index)} href="#">
                    {menu.name}
                  </NavLink>
                </Nav>
              );
            })}
          </Navs>
        </NavResponsive>
      </Content>
    </Container>
  );
};

export default Navigation;
