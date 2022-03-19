import React, { useContext, useState } from "react";
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

import CartContext from "../../hooks/useCart";

import Dropdown from "../Dropdown";

const Icons = () => {
  const { counter } = useContext(CartContext);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <Dropdown active={isDropdown} setIsDropdown={setIsDropdown} />
      <Container>
        <Favorite>
          <ButtonInfo>
            <BsHeart size={23} color="#ffffff" className="icon-favorite" />
            <Span>Your Wishlist</Span>
            <Info>0</Info>
          </ButtonInfo>
        </Favorite>

        <Cart onClick={() => setIsDropdown(!isDropdown)}>
          <ButtonInfo>
            <BsFillCartFill size={23} color="#ffffff" className="icon-cart" />
            <Span>Your Cart</Span>
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
