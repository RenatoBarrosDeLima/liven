import React from "react";
import Image from "next/image";
import { BsFillCartCheckFill } from "react-icons/bs";

import {
  ItemQuantity,
  ItemPrice,
  ItemName,
  Li,
  ImageContainer,
  MainColorText,
  LighterText,
  Ul,
  Button,
  ShoppingCartTotal,
  ShoppingCartHeader,
  ShoppingCart,
  Container,
} from "./styles";

interface DropdownProps {
  active: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ active }) => {
  return (
    <>
      <Container active={active}>
        <ShoppingCart>
          <ShoppingCartHeader>
            <ShoppingCartTotal>
              <LighterText>Total:</LighterText>
              <MainColorText>$2,229.97</MainColorText>
            </ShoppingCartTotal>
          </ShoppingCartHeader>

          <Ul>
            <Li>
              <ImageContainer>
                <Image
                  src={require("../../../img/product01.png")}
                  width={80}
                  height={80}
                  alt="item1"
                />
              </ImageContainer>
              <ItemName>Sony DSC-RX100M III</ItemName>
              <ItemPrice>$849.99</ItemPrice>
              <ItemQuantity>Quantity: 01</ItemQuantity>
            </Li>
          </Ul>

          <Button>Checkout</Button>
        </ShoppingCart>
      </Container>
    </>
  );
};

export default Dropdown;
