// Importação das bibliotecas do react
import React, { useContext } from "react";
// Importação da biblioteca de imagens do Next
import Image from "next/image";
// Importação das bibliotecas do react-icons
import { BsFillBagCheckFill, BsTrashFill, BsPlusCircle } from "react-icons/bs";
import { CgRemove } from "react-icons/cg";

// Importação dos meus componentes estilizados usando o styled components
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
  ItemQuantityValue,
} from "./styles";

// Importação do hook de carrinho
import CartContext from "../../hooks/useCart";

// Importação das funções criadas
import { moneyFormat } from "../../helpers/functions";

// Props para exibir ou ocultar o componente do carrinho, dependendo da variável active
interface DropdownProps {
  active: boolean;
  setIsDropdown: (active: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ active, setIsDropdown }) => {
  // Variáveis e funções definidas e comentadas no hook de carrinho <src\hooks\useCart.tsx>
  const {
    carts,
    totalPrice,
    removeCart,
    addQuantityItemCart,
    removeQuantityItemCart,
  } = useContext(CartContext);

  // Função para exibir ou ocultar o componente do carrinho, active: false ou true
  const handleCheckout = () => {
    setIsDropdown(!active);
  };

  // Função para remover todos os items do carrinho chamando a função removeCart() do hook de carrinho
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
                    <ItemQuantity>
                      Quantidade:
                      <ItemQuantityValue> {cart.quantity} </ItemQuantityValue>
                    </ItemQuantity>
                  </CartItem>
                  <DeleteItemCart>
                    <BsPlusCircle
                      onClick={() => addQuantityItemCart(cart.id)}
                      size={23}
                      color="#000000"
                      className="icon-delete"
                    />

                    <CgRemove
                      onClick={() => removeQuantityItemCart(cart.id)}
                      size={23}
                      color="#000000"
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
