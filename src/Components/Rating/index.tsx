// Importação da biblioteca do react
import React from "react";
// Importação das bibliotecas do react-icons
import { BsStarFill, BsStarHalf } from "react-icons/bs";

// Importação dos meus componentes estilizados usando o styled components
import { Container, Count, Reviews } from "./styles";

// Importação das funções criadas
import { fractional } from "../../functions";

interface RatingProps {
  rating: any;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Função para saber se um número é inteiro, se for exibe o ícone da estrela completa
  const starFill = (star: number) => {
    if (star <= rating.rate) {
      return <BsStarFill size={15} color="#806d03" />;
    }
  };

  // Função para saber se um número é fracionário, se for exibe o ícone da meia-estrela
  const starHalf = () => {
    if (fractional(rating.rate)) {
      return <BsStarHalf size={15} color="#806d03" />;
    }
  };

  return (
    <Container>
      {starFill(1)}
      {starFill(2)}
      {starFill(3)}
      {starFill(4)}
      {starFill(5)}
      {starHalf()}
      <Count>
        {rating?.count}
        <Reviews>Avaliações</Reviews>
      </Count>
    </Container>
  );
};

export default Rating;
