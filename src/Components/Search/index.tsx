import React from "react";

import { ButtonSearch, Container, Form, InputSearch } from "./styles";

const Search = () => {
  return (
    <>
      <Container>
        <Form>
          <InputSearch placeholder="Faça sua pesquisa aqui" />
          <ButtonSearch>Buscar</ButtonSearch>
        </Form>
      </Container>
    </>
  );
};

export default Search;
