import styled from "styled-components";

export const ButtonHeader = styled.a`
  color: #fff;
`;

export const Container = styled.body`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #333;
`;

export const Content = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #1e1f29;
  display: flex;
`;

export const LeftUL = styled.ul`
  float: left;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 991px) {
    float: none !important;
  }
`;

export const Li = styled.li`
  display: inline-block;
  margin-right: 15px;
  font-size: 12px;

  :last-child {
    margin-right: 0px;
  }
`;

export const RightUL = styled.ul`
  float: right;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 991px) {
    float: none !important;
    margin-top: 5px;
  }
`;

export const Row = styled.div`
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
