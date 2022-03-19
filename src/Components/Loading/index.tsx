import React from "react";

import { LoadThree, LoadTwo, LoadOne, Container } from "./styles";

const Loading = () => {
  return (
    <>
      <Container>
        <LoadOne></LoadOne>
        <LoadTwo></LoadTwo>
        <LoadThree></LoadThree>
      </Container>
    </>
  );
};

export default Loading;
