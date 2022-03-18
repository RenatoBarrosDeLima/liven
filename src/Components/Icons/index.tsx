import React, { useContext } from "react";
import { BsHeart, BsFillCartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

import {
  ButtonInfo,
  Cart,
  Container,
  Favorite,
  Info,
  Menu,
  Span,
} from "./styles";

import UserContext from "../../hooks/useCart";

const Icons = () => {
  const { counter } = useContext(UserContext);

  return (
    <>
      <Container>
        <Favorite>
          <ButtonInfo>
            <BsHeart size={18} color="#ffffff" className="icon-favorite" />
            <Span>Your Wishlist</Span>
            <Info>2</Info>
          </ButtonInfo>
        </Favorite>

        <Cart>
          <ButtonInfo>
            <BsFillCartFill size={18} color="#ffffff" className="icon-cart" />
            <Span>Your Cart</Span>
            <Info>{counter}</Info>
          </ButtonInfo>
        </Cart>

        <Menu>
          <ButtonInfo>
            <AiOutlineMenu size={18} color="#ffffff" className="icon-menu" />
            <Span>Menu</Span>
          </ButtonInfo>
        </Menu>
      </Container>
    </>
  );
};

export default Icons;
