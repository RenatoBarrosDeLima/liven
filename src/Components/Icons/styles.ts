import styled from "styled-components";

export const ButtonInfo = styled.a`
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
  margin-left: 15px;
`;

export const Cart = styled.div`
  display: inline-block;
  cursor: pointer;

  .icon-cart {
    display: block;
    margin-left: 40%;
  }
`;

export const Container = styled.div`
  float: right;
  padding: 15px 0px;
`;

export const Favorite = styled.div`
  display: inline-block;

  .icon-favorite {
    display: block;
    margin-left: 40%;
  }
`;

export const Info = styled.div`
  position: absolute;
  right: 15px;
  top: -10px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  background-color: #d10024;
`;

export const Menu = styled.div`
  display: none !important;

  @media only screen and (max-width: 991px) {
    display: inline-block !important;
  }

  .icon-menu {
    display: block;
    margin-left: 40%;
  }
`;

export const Span = styled.span`
  font-size: 13px;
`;
