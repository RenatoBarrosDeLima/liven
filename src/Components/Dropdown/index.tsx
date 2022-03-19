import React, { useContext } from "react";
import Image from "next/image";
import { BsFillBagCheckFill, BsTrashFill } from "react-icons/bs";

import {
  Button,
  Container,
  DeleteCart,
  ImageContainer,
  ItemName,
  ItemPrice,
  ItemQuantity,
  Item,
  Items,
  TotalLabel,
  TotalPrice,
  ShoppingCart,
  ShoppingCartHeader,
  ShoppingCartTotal,
} from "./styles";

import UserContext from "../../hooks/useCart";
import { moneyFormat } from "../../helpers/functions";

interface DropdownProps {
  active: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ active }) => {
  const { carts, totalPrice } = useContext(UserContext);
  return (
    <>
      <Container active={active}>
        <ShoppingCart>
          <ShoppingCartHeader>
            <ShoppingCartTotal>
              <TotalLabel>Total:</TotalLabel>
              <TotalPrice>{moneyFormat(totalPrice)}</TotalPrice>
            </ShoppingCartTotal>
          </ShoppingCartHeader>

          <Items>
            {carts.map((cart) => {
              return (
                <Item key={cart.id}>
                  <ImageContainer>
                    <Image
                      src={`${cart?.image}`}
                      width={80}
                      height={80}
                      alt={cart.title}
                    />
                  </ImageContainer>
                  <ItemName>{cart.title}</ItemName>
                  <ItemPrice>{moneyFormat(cart.price)}</ItemPrice>
                  <ItemQuantity>Quantity: 01</ItemQuantity>
                </Item>
              );
            })}
          </Items>

          <Button>
            {" "}
            <BsFillBagCheckFill size={16} className="icon-checkout" />
            Checkout
          </Button>
          <DeleteCart>
            {" "}
            <BsTrashFill size={16} className="icon-delete" />
            Apagar Carrinho
          </DeleteCart>
        </ShoppingCart>
      </Container>
    </>
  );
};

export default Dropdown;
