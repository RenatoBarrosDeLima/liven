import React from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";

import { moneyFormat } from "../../helpers/functions";

import Rating from "../../Components/Rating";
import { Price, Title, Col4, Row, SmallContainer, ButtonAdd } from "./styles";

interface ProductProps {
  products: any;
}

const Product: React.FC<ProductProps> = ({ products }) => {
  // console.log("products ", products);

  return (
    <SmallContainer>
      <Row>
        {products.map((product: any) => {
          return (
            <Col4 key={product?.id}>
              <Image width={263} height={263} src={`${product?.image}`} />
              <ButtonAdd>
                <a href="#">
                  <BsFillCartPlusFill
                    className="icon-cart"
                    size={16}
                    color="#130066"
                  />{" "}
                  Adicionar no carrinho
                </a>
              </ButtonAdd>
              <Title>{product?.title}</Title>
              <Rating rating={product?.rating} />
              <Price>{moneyFormat(product?.price)}</Price>
            </Col4>
          );
        })}
      </Row>
    </SmallContainer>
  );
};

export default Product;
