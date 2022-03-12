import styled from "styled-components";

export const Col3 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    float: left;
    width: 25%;
  }
`;

export const Col6 = styled.div`
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    float: left;
    width: 50%;
  }
`;

export const Container = styled.body`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #333;
`;

export const HeaderContainer = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #15161d;
`;

export const HeaderContent = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flow-root;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;
