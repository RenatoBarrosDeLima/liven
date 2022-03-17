import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

import { Container, Count, Reviews } from "./styles";

import { fractional } from "../../helpers/functions";

interface RatingProps {
  rating: any;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const starFill = (star: number) => {
    if (star <= rating.rate) {
      return <BsStarFill size={15} color="#806d03" />;
    }
  };

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
