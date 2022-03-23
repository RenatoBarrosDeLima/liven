// Importação das bibliotecas do react
import React, { useContext, useState } from "react";
// Importação das bibliotecas do react-icons
import { BsHeart, BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

// Importação dos componentes criados
import Dropdown from "../Dropdown";

// Importação dos meus componentes estilizados usando o styled components
import {
  ButtonInfo,
  Cart,
  Container,
  Favorite,
  Info,
  Menu,
  Span,
} from "./styles";

// Importação do hook de carrinho
import CartContext from "../../hooks/useCart";

const Icons = () => {
  // Variável definida e comentada no hook de carrinho <src\hooks\useCart.tsx>
  const { counter } = useContext(CartContext);
  // Variável que exibe ou oculta o componente de carrinho com suas informações
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      {/* Se a variável isDropdown for true então exibe o componente do carrinho  */}
      <Dropdown active={isDropdown} setIsDropdown={setIsDropdown} />
      <Container>
        <Favorite>
          <ButtonInfo>
            <BsHeart size={23} color="#ffffff" className="icon-favorite" />
            <Span>Seus favoritos</Span>
            <Info>0</Info>
          </ButtonInfo>
        </Favorite>

        <Cart onClick={() => setIsDropdown(!isDropdown)}>
          <ButtonInfo>
            <BsFillCartFill size={23} color="#ffffff" className="icon-cart" />
            <Span>Seu carrinho</Span>
            <Info>{counter}</Info>
          </ButtonInfo>
        </Cart>

        <Menu>
          <ButtonInfo>
            <AiOutlineMenu size={23} color="#ffffff" className="icon-menu" />
            <Span>Menu</Span>
          </ButtonInfo>
        </Menu>
      </Container>
    </>
  );
};

export default Icons;
