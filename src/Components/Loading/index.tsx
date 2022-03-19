import React, { useContext } from "react";

import { Container, LoadThree, LoadTwo, LoadOne } from "./styles";

import UserContext from "../../hooks/useLoading";

const Loading = () => {
  const { loading } = useContext(UserContext);

  if (!loading) return <></>;

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
