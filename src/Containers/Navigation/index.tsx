// Importação das bibliotecas do react
import React, { useState, useContext } from "react";
// Importação da bibliotecas do Axios
import axios from "axios";

// Importação dos meus componentes estilizados usando o styled components
import {
  Container,
  Content,
  Nav,
  NavLink,
  NavResponsive,
  Navs,
} from "./styles";

// Importação dos hooks
import LoadingContext from "../../hooks/useLoading";
import ToastContext from "../../hooks/useToast";

interface NavitaionProps {
  menus: any;
  setListProducts: (list: any) => void;
}

const Navigation: React.FC<NavitaionProps> = ({ menus, setListProducts }) => {
  // Funções definidas e comentadas no hook de loading <src\hooks\useLoading.tsx>
  const { openLoading, closeLoading } = useContext(LoadingContext);
  // Função definida e comentada no hook de toast <src\hooks\useToast.tsx>
  const { openToast } = useContext(ToastContext);
  // Variável que armazena o index do menu atual
  const [active, setActive] = useState(0);

  const handleMenu = async (item: string, index: number) => {
    setActive(index);
    openLoading();

    // Faz um consulta na API fakestoreapi e busca os produtos por categoria
    try {
      await axios
        .get(`/api/category`, {
          params: {
            categoryName: item,
          },
        })
        .then((res) => {
          // Atualiza a lista de produtos a ser exibidas, de acordo com a categoria clicada
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
