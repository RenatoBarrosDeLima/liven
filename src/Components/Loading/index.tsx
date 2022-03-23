// Importação das bibliotecas do react
import React, { useContext } from "react";

// Importação dos meus componentes estilizados usando o styled components
import { Container, LoadThree, LoadTwo, LoadOne } from "./styles";

// Importação do hook de loading
import LoadingContext from "../../hooks/useLoading";

const Loading = () => {
  // Variável definida e comentada no hook de loading <src\hooks\useLoading.tsx>
  const { loading } = useContext(LoadingContext);

  // Se loading for true então exibe o loading, caso contrário não exibe nada
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
