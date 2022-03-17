import styled from "styled-components";

export const Price = styled.p`
  font-size: 14px;
`;

export const Title = styled.h4`
  color: #555;
  font-weight: normal;
`;

export const Col4 = styled.div`
  box-sizing: border-box;
  flex-basis: 24%;
  padding: 10px;
  min-width: 200px;
  margin-bottom: 50px;
  transition: transform 0.5s;
  text-align: center;
  border: 1px solid #e1e0ec;

  :hover {
    transform: translateY(-5px);
  }

  :hover button {
    text-align: center;

    opacity: 1;
    transform: scale(1.1);
    transition: all 0.5s;
    transition-delay: 0.05s;
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

export const ButtonAdd = styled.button`
  opacity: 0;
  background: transparent;
  padding: 5px 20px;
  border-color: #0a0824;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  cursor: pointer;

  a {
    display: flex;
  }

  .icon-cart {
    margin-right: 5px;
  }
`;
