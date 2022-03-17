import React from "react";

import { ButtonSearch, Container, Form, InputSearch } from "./styles";

const Search = () => {
  return (
    <>
      <Container>
        <Form>
          <InputSearch placeholder="Search here" />
          <ButtonSearch>Search</ButtonSearch>
        </Form>
      </Container>
    </>
  );
};

export default Search;
