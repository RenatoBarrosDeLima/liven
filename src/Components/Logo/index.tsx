// Importação da biblioteca do react
import React from "react";
// Importação da biblioteca de imagens do Next
import Image from "next/image";

// Importação dos meus componentes estilizados usando o styled components
import { Container, LogoButton } from "./styles";

const Logo = () => {
  return (
    <>
      <Container>
        <LogoButton href="#">
          <Image
            src={require("../../../img/logo.png")}
            width={169}
            height={70}
          />
        </LogoButton>
      </Container>
    </>
  );
};

export default Logo;
