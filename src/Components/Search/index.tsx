import React from "react";

import { ButtonSearch, Container, Form, InputSearch } from "./styles";

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
