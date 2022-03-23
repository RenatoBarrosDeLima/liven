// Importação das bibliotecas do react
import React, { useState } from "react";
// Importação das bibliotecas do react-icons
import { BsFillTelephoneFill, BsFillGeoAltFill, BsHeart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

// Importação dos meus componentes estilizados usando o styled components
import {
  Col12,
  Col3,
  Container,
  Content,
  Copyright,
  FooterTitle,
  Link,
  LinkButton,
  ListFooter,
  Links,
  Row,
  Section,
} from "./styles";

// Importação dos dados mockados
import { phone, address, email, author } from "../mockData";

const Footer = () => {
  // Variável que armazena o ano atual
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      <Container>
        <Section bottom={false}>
          <Content>
            <Row>
              <Col3>
                <ListFooter>
                  <FooterTitle>About Us</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton>
                        <BsFillGeoAltFill
                          className="icon-footer"
                          size={12}
                          color="#D10024"
                        />
                        {address}
                      </LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>
                        <BsFillTelephoneFill
                          className="icon-footer"
                          size={12}
                          color="#D10024"
                        />
                        {phone}
                      </LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>
                        <AiOutlineMail
                          className="icon-footer"
                          size={12}
                          color="#D10024"
                        />
                        {email}
                      </LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>

              <Col3>
                <ListFooter>
                  <FooterTitle>Categories</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton>Hot deals</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Laptops</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Smartphones</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Cameras</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Accessories</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>

              <Col3>
                <ListFooter>
                  <FooterTitle>Information</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton>About Us</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Contact Us</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Privacy Policy</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Orders and Returns</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Terms & Conditions</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>

              <Col3>
                <ListFooter>
                  <FooterTitle>Service</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton>My Account</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>View Cart</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Wishlist</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Track My Order</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton>Help</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>
            </Row>
          </Content>
        </Section>

        <Section bottom={true}>
          <Content>
            <Row>
              <Col12>
                <Copyright>
                  Copyright &copy;
                  {year} All rights reserved | This template is made with{" "}
                  <BsHeart size={12} color="#ffffff" /> by {author}
                </Copyright>
              </Col12>
            </Row>
          </Content>
        </Section>
      </Container>
    </>
  );
};

export default Footer;
