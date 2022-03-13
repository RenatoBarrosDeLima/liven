import styled from "styled-components";

interface SectionProps {
  bottom: boolean;
}

export const Col12 = styled.div`
  text-align: center;

  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: 992px) {
    float: left;
    width: 100%;
  }
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

export const Container = styled.footer`
  background: #15161d;
  color: #b9babc;
`;

export const Content = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: table;

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

export const Copyright = styled.span`
  margin-top: 30px;
  display: block;
  font-size: 12px;
`;

export const FooterTitle = styled.h3`
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  margin: 0px 0px 30px;
`;

export const Link = styled.li``;

export const LinkButton = styled.a`
  color: #b9babc;

  .icon-footer {
    margin-right: 15px;
    width: 14px;
    text-align: center;
  }
`;

export const ListFooter = styled.div`
  margin: 30px 0px;
`;

export const Links = styled.ul`
  list-style: none;
  padding: 0;
  line-height: 2;
`;

export const Row = styled.div`
  margin-right: -15px;
  margin-left: -15px;
`;

export const Section = styled.div<SectionProps>`
  background: ${($props) => ($props.bottom ? "#1e1f29" : "")};
  display: block;
  padding-top: 30px;
  padding-bottom: 30px;
`;
