import styled from "styled-components";

interface NavProps {
  active: boolean;
}

export const Navs = styled.ul`
  margin: 7.5px -15px;
  display: block;
  padding: 0;

  @media (min-width: 768px) {
    float: left;
    margin: 0;
  }

  li > a {
    padding: 20px 0px;
  }

  li + li {
    margin-left: 30px;
  }
`;

export const Nav = styled.li<NavProps>`
  margin: 10.5px -15px;

  position: relative;
  display: block;

  @media (min-width: 768px) {
    float: left;
  }

  a:after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background-color: #d10024;
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }

  a:hover:after,
  a:focus:after,
  a:after {
    width: ${($props) => ($props.active ? "100%" : "")};
  }

  a {
    color: ${($props) => ($props.active ? "#d10024" : "")};
    background-color: ${($props) => ($props.active ? "transparent" : "")};
  }
`;

export const NavLink = styled.a`
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;

  @media (min-width: 768px) {
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

export const NavResponsive = styled.div`
  @media only screen and (max-width: 991px) {
    position: fixed;
    left: 0;
    top: 0;
    background: #15161d;
    height: 100vh;
    max-width: 250px;
    width: 0%;
    overflow: hidden;
    z-index: 22;
    padding-top: 60px;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: 0.2s all;
    transition: 0.2s all;
  }
`;

export const Content = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

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

export const Container = styled.nav`
  background: #fff;
  border-bottom: 2px solid #e4e7ed;
  border-top: 3px solid #d10024;
`;
