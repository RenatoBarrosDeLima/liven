import React from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";

import {
  Rating,
  Price,
  Title,
  Col4,
  Row,
  SmallContainer,
  ButtonAdd,
} from "./styles";

const Product = () => {
  return (
    <>
      <SmallContainer>
        <Row>
          <Col4>
            <Image
              src={require("../../../img/product01.png")}
              width={263}
              height={263}
            />
            <ButtonAdd>
              <a href="#">
                <AiOutlineShoppingCart
                  className="icon-cart"
                  size={16}
                  color="#0a0824"
                />{" "}
                Comprar
              </a>
            </ButtonAdd>
            <Title>Red Printed T-shirt</Title>
            <Rating>
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiOutlineStar size={16} color="#ff523b" />
            </Rating>
            <Price>R$ 98,50</Price>
          </Col4>

          <Col4>
            <Image
              src={require("../../../img/product02.png")}
              width={263}
              height={263}
            />
            <ButtonAdd>
              <a href="#">
                <AiOutlineShoppingCart
                  className="icon-cart"
                  size={16}
                  color="#0a0824"
                />{" "}
                Comprar
              </a>
            </ButtonAdd>
            <Title>Red Printed T-shirt</Title>
            <Rating>
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiOutlineStar size={16} color="#ff523b" />
            </Rating>
            <Price>R$ 98,50</Price>
          </Col4>

          <Col4>
            <Image
              src={require("../../../img/product03.png")}
              width={263}
              height={263}
            />
            <ButtonAdd>
              <a href="#">
                <AiOutlineShoppingCart
                  className="icon-cart"
                  size={16}
                  color="#0a0824"
                />{" "}
                Comprar
              </a>
            </ButtonAdd>
            <Title>Red Printed T-shirt</Title>
            <Rating>
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiOutlineStar size={16} color="#ff523b" />
            </Rating>
            <Price>R$ 98,50</Price>
          </Col4>

          <Col4>
            <Image
              src={require("../../../img/product04.png")}
              width={263}
              height={263}
            />
            <ButtonAdd>
              <a href="#">
                <AiOutlineShoppingCart
                  className="icon-cart"
                  size={16}
                  color="#0a0824"
                />{" "}
                Comprar
              </a>
            </ButtonAdd>
            <Title>Red Printed T-shirt</Title>
            <Rating>
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiOutlineStar size={16} color="#ff523b" />
            </Rating>
            <Price>R$ 98,50</Price>
          </Col4>

          <Col4>
            <Image
              src={require("../../../img/product05.png")}
              width={263}
              height={263}
            />
            <ButtonAdd>
              <a href="#">
                <AiOutlineShoppingCart
                  className="icon-cart"
                  size={16}
                  color="#0a0824"
                />{" "}
                Comprar
              </a>
            </ButtonAdd>
            <Title>Red Printed T-shirt</Title>
            <Rating>
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiFillStar size={16} color="#ff523b" />
              <AiOutlineStar size={16} color="#ff523b" />
            </Rating>
            <Price>R$ 98,50</Price>
          </Col4>
        </Row>
      </SmallContainer>
    </>
  );
};

export default Product;
