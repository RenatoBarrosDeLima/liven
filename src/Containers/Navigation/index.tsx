import React, { useState } from "react";

import {
  Container,
  Content,
  Nav,
  NavLink,
  NavResponsive,
  Navs,
} from "./styles";

interface NavitaionProps {
  menus: any;
}

const Navigation: React.FC<NavitaionProps> = ({ menus }) => {
  const [active, setActive] = useState(0);
  return (
    <Container>
      <Content>
        <NavResponsive>
          <Navs>
            {menus?.map((menu: string, index: number) => {
              return (
                <Nav key={index} active={active === index ? true : false}>
                  <NavLink onClick={() => setActive(index)} href="#">
                    {menu}
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
