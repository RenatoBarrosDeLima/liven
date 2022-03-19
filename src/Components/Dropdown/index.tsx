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
  DeleteItemCart,
  CartItem,
} from "./styles";

import UserContext from "../../hooks/useCart";
import { moneyFormat } from "../../helpers/functions";

interface DropdownProps {
  active: boolean;
  setIsDropdown: (active: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ active, setIsDropdown }) => {
  const { carts, totalPrice, removeCart, removeItemCart } =
    useContext(UserContext);

  const handleCheckout = () => {
    setIsDropdown(!active);
  };

  const handleDeleteCart = () => {
    removeCart();
    setIsDropdown(!active);
  };

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
                  <CartItem>
                    <ItemName>{cart.title}</ItemName>
                    <ItemPrice>{moneyFormat(cart.price)}</ItemPrice>
                    <ItemQuantity>Quantity: 01</ItemQuantity>
                  </CartItem>
                  <DeleteItemCart>
                    <BsTrashFill
                      onClick={() => removeItemCart(cart.id)}
                      size={16}
                      color="#1a0b0c"
                      className="icon-delete"
                    />
                  </DeleteItemCart>
                </Item>
              );
            })}
          </Items>

          <Button onClick={() => handleCheckout()}>
            {" "}
            <BsFillBagCheckFill size={16} className="icon-checkout" />
            Checkout
          </Button>
          <DeleteCart onClick={() => handleDeleteCart()}>
            {" "}
            <BsTrashFill size={16} className="icon-delete" />
            Apagar tudo
          </DeleteCart>
        </ShoppingCart>
      </Container>
    </>
  );
};

export default Dropdown;
