import React, { useState } from "react";
import { BsFillTelephoneFill, BsFillGeoAltFill, BsHeart } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

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

import { phone, address, email, author } from "../mockData";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      {/* FOOTER  */}
      <Container>
        {/* top footer  */}
        <Section bottom={false}>
          {/* container  */}
          <Content>
            {/* row  */}
            <Row>
              <Col3>
                <ListFooter>
                  <FooterTitle>About Us</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton href="#">
                        <BsFillGeoAltFill
                          className="icon-footer"
                          size={12}
                          color="#D10024"
                        />
                        {address}
                      </LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">
                        <BsFillTelephoneFill
                          className="icon-footer"
                          size={12}
                          color="#D10024"
                        />
                        {phone}
                      </LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">
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
                      <LinkButton href="#">Hot deals</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Laptops</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Smartphones</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Cameras</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Accessories</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>

              <Col3>
                <ListFooter>
                  <FooterTitle>Information</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton href="#">About Us</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Contact Us</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Privacy Policy</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Orders and Returns</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Terms & Conditions</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>

              <Col3>
                <ListFooter>
                  <FooterTitle>Service</FooterTitle>
                  <Links>
                    <Link>
                      <LinkButton href="#">My Account</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">View Cart</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Wishlist</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Track My Order</LinkButton>
                    </Link>
                    <Link>
                      <LinkButton href="#">Help</LinkButton>
                    </Link>
                  </Links>
                </ListFooter>
              </Col3>
            </Row>
            {/* /row  */}
          </Content>
          {/* /container  */}
        </Section>
        {/* /top footer  */}

        {/* bottom footer */}
        <Section bottom={true}>
          <Content>
            {/* row  */}
            <Row>
              <Col12>
                <Copyright>
                  Copyright &copy;
                  {year} All rights reserved | This template is made with{" "}
                  <BsHeart size={12} color="#ffffff" /> by {author}
                </Copyright>
              </Col12>
            </Row>
            {/* /row  */}
          </Content>
          {/* /container */}
        </Section>
        {/* /bottom footer  */}
      </Container>
      {/* /FOOTER  */}
    </>
  );
};

export default Footer;
