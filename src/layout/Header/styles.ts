import styled from "styled-components";

export const ToggleMenu = styled.div`
  display: none !important;

  @media only screen and (max-width: 991px) {
    display: inline-block !important;
  }

  .icon-menu {
    display: block;
    margin-left: 40%;
  }
`;

export const ToggleCart = styled.div`
  display: inline-block;

  .icon-cart {
    display: block;
    margin-left: 40%;
  }
`;

export const ToggleFavorit = styled.div`
  display: inline-block;

  .icon-favorite {
    display: block;
    margin-left: 40%;
  }
`;

export const Span = styled.span`
  font-size: 12px;
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

export const ButtonInfo = styled.a`
  display: block;
  position: relative;
  width: 90px;
  text-align: center;
  color: #fff;
  margin-left: 15px;
`;

export const HeaderIcons = styled.div`
  float: right;
  padding: 15px 0px;
`;

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

export const ButtonSearch = styled.button`
  height: 40px;
  width: 100px;
  background: #d10024;
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 0px 40px 40px 0px;
  padding: 1px 15px 0px 0px;
`;

export const InputSearch = styled.input`
  height: 40px;
  padding: 1px 15px 0px 0px;
  border: 1px solid #e4e7ed;
  background-color: #fff;
  width: 100%;

  width: calc(100% - 260px);
  margin-right: -4px;
`;

export const SelectSearch = styled.select`
  padding: 0px 15px;
  background: #fff;
  border: 1px solid #e4e7ed;
  height: 40px;

  margin-right: -4px;
  border-radius: 40px 0px 0px 40px;
`;

export const HeaderSearch = styled.div`
  padding: 15px 0px;
`;

export const FormSearch = styled.form`
  position: relative;
`;

export const Logo = styled.a`
  display: block;

  @media only screen and (max-width: 991px) {
    display: inline-block;
  }
`;

export const HeaderLogo = styled.div`
  @media only screen and (max-width: 991px) {
    display: flex;
    justify-content: center;
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

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;
