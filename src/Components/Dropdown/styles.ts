import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Rating = styled.div``;

export const Price = styled.p`
  font-size: 14px;
`;

export const Title = styled.h4`
  color: #555;
  font-weight: normal;
`;

export const Col4 = styled.div`
  box-sizing: border-box;
  flex-basis: 25%;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 50px;
  transition: transform 0.5s;
  img {
    width: 100%;
  }

  :hover {
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 600px) {
    flex-basis: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 70px;

  @media only screen and (max-width: 600px) {
    text-align: center;
  }
`;

export const SmallContainer = styled.div`
  max-width: 1080px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`;

export const ItemQuantity = styled.span`
  color: #abb0be;
`;

export const ItemPrice = styled.span`
  color: #6394f8;
  margin-right: 8px;
`;

export const ItemName = styled.span`
  display: block;
  padding-top: 10px;
  font-size: 16px;
`;

export const Li = styled.li`
  margin-bottom: 18px;

  :after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Ul = styled.ul`
  padding-top: 20px;
  list-style: none;
`;

export const ImageContainer = styled.div`
  float: left;
  margin-right: 12px;
`;

export const MainColorText = styled.span`
  color: #6394f8;
`;

export const LighterText = styled.span`
  color: #abb0be;
`;

export const Button = styled.a`
  background: #6394f8;
  color: white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;

  :hover {
    background: #729ef9;
  }
`;

export const ShoppingCartTotal = styled.div`
  float: right;
`;

export const ShoppingCartHeader = styled.div`
  border-bottom: 1px solid #545454;
  padding-bottom: 30px;
`;

export const ShoppingCart = styled.div`
  float: right;
  background: #f2f2f2;
  width: 400px;
  position: relative;
  border-radius: 3px;
  padding: 20px;

  :after {
    bottom: 100%;
    left: 89%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-bottom-color: white;
    border-width: 8px;
    margin-left: -8px;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 23% 0;
  width: 90%;
  position: absolute;
  z-index: 9999;
  display: ${($props) => ($props.active ? "" : "none")};
`;
