import React, { useContext } from "react";
import Image from "next/image";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";

import { moneyFormat } from "../../helpers/functions";

import Rating from "../../components/Rating";
import { Price, Title, Col4, Row, Container, ButtonAdd } from "./styles";

import UserContext from "../../hooks/useCart";

interface ProductProps {
  products: any;
}

const Product: React.FC<ProductProps> = ({ products }) => {
  const { addCart, removeItemCart, carts } = useContext(UserContext);

  const isCart = (item: number) => {
    if (carts.findIndex((x) => x.id === item) >= 0) return true;
    return false;
  };

  return (
    <Container>
      <Row>
        {products.map((product: any) => {
          return (
            <>
              {isCart(product.id) ? (
                <Col4 key={product?.id}>
                  <Image width={263} height={263} src={`${product?.image}`} />
                  <ButtonAdd onClick={() => removeItemCart(product.id)}>
                    <a>
                      <BsFillCartDashFill
                        className="icon-cart"
                        size={16}
                        color="#dd0404"
                      />
                      Remover do carrinho
                    </a>
                  </ButtonAdd>
                  <Title>{product?.title}</Title>
                  <Rating rating={product?.rating} />
                  <Price>{moneyFormat(product?.price)}</Price>
                </Col4>
              ) : (
                <Col4 key={product?.id}>
                  <Image width={263} height={263} src={`${product?.image}`} />
                  <ButtonAdd
                    onClick={() => addCart({ ...product, quantity: 1 })}
                  >
                    <a>
                      <BsFillCartPlusFill
                        className="icon-cart"
                        size={16}
                        color="#130066"
                      />
                      Adicionar no carrinho
                    </a>
                  </ButtonAdd>
                  <Title>{product?.title}</Title>
                  <Rating rating={product?.rating} />
                  <Price>{moneyFormat(product?.price)}</Price>
                </Col4>
              )}
            </>
          );
        })}
      </Row>
    </Container>
  );
};

export default Product;
