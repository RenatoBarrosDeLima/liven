import React, { useState, useContext } from "react";
import axios from "axios";

import {
  Container,
  Content,
  Nav,
  NavLink,
  NavResponsive,
  Navs,
} from "./styles";

import LoadingContext from "../../hooks/useLoading";
import ToastContext from "../../hooks/useToast";

interface NavitaionProps {
  menus: any;
  setListProducts: (list: any) => void;
}

const Navigation: React.FC<NavitaionProps> = ({ menus, setListProducts }) => {
  const { openLoading, closeLoading } = useContext(LoadingContext);
  const { openToast } = useContext(ToastContext);
  const [active, setActive] = useState(0);

  const handleMenu = async (item: string, index: number) => {
    setActive(index);
    openLoading();

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
      openToast("Tivermos um erro ao consultar os produtos");
    } finally {
      closeLoading();
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
                  <NavLink onClick={() => handleMenu(menu, index)}>
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
