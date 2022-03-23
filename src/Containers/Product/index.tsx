// Importação das bibliotecas do react
import React, { useContext } from "react";
// Importação da biblioteca de imagens do Next
import Image from "next/image";
// Importação das bibliotecas do react-icons
import { BsFillCartPlusFill, BsFillCartDashFill } from "react-icons/bs";

// Importação dos componentes criados
import Rating from "../../Components/Rating";

// Importação dos meus componentes estilizados usando o styled components
import { Price, Title, Col4, Row, Container, ButtonAdd } from "./styles";

// Importação do hook de carrinho
import CartContext from "../../hooks/useCart";

// Importação das funções criadas
import { moneyFormat } from "../../functions";

interface ProductProps {
  products: any;
}

const Product: React.FC<ProductProps> = ({ products }) => {
  // Variável definida e comentada no hook de carrinho <src\hooks\useCart.tsx>
  const { addCart, removeItemCart, carts } = useContext(CartContext);

  // Função que verifica se um produto já foi adicionado no carrinho
  const isCart = (item: number) => {
    // Se o ID do produto já tiver sido adicionado no carrinho então retorna true, caso contrário retorna falso
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
