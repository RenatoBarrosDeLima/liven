import React, { useState } from "react";
import axios from "axios";

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
  setListProducts: (list: any) => void;
}

const Navigation: React.FC<NavitaionProps> = ({ menus, setListProducts }) => {
  const [active, setActive] = useState(0);

  const handleMenu = async (item: string, index: number) => {
    setActive(index);

    try {
      await axios
        .get(`/api/category`, {
          params: {
            categoryName: item,
          },
        })
        .then((res) => {
          setListProducts(res.data);
        });
    } catch (e) {
    } finally {
    }
  };

  return (
    <Container>
      <Content>
        <NavResponsive>
          <Navs>
            {menus?.map((menu: string, index: number) => {
              return (
                <Nav key={index} active={active === index ? true : false}>
                  <NavLink onClick={() => handleMenu(menu, index)} href="#">
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
