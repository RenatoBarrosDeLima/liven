// Importação das bibliotecas do react
import React from "react";

// Importação dos meus componentes estilizados usando o styled components
import { ButtonSearch, Container, Form, InputSearch } from "./styles";

// Função fake para pesquisar, sem funcionlidade até o momento
const Search = () => {
  const handleSearch = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleSearch(e)}>
          <InputSearch placeholder="Faça sua pesquisa aqui" />
          <ButtonSearch>Buscar</ButtonSearch>
        </Form>
      </Container>
    </>
  );
};

export default Search;
