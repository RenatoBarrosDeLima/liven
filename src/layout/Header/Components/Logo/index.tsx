import React from "react";
import Image from "next/image";

import { Container, LogoButton } from "./styles";

const Logo = () => {
  return (
    <>
      <Container>
        <LogoButton href="#">
          <Image
            src={require("../../../../../img/logo.png")}
            width={169}
            height={70}
          />
        </LogoButton>
      </Container>
    </>
  );
};

export default Logo;
