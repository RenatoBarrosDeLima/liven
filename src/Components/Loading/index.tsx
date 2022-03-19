import React, { useContext } from "react";

import { Container, LoadThree, LoadTwo, LoadOne } from "./styles";

import LoadingContext from "../../hooks/useLoading";

const Loading = () => {
  const { loading } = useContext(LoadingContext);

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
