import React from "react";

import { ButtonSearch, Container, Form, InputSearch, Select } from "./styles";

const Search = () => {
  return (
    <>
      <Container>
        <Form>
          <Select>
            <option value="0">All Categories</option>
            <option value="1">Category 01</option>
            <option value="1">Category 02</option>
          </Select>
          <InputSearch placeholder="Search here" />
          <ButtonSearch>Search</ButtonSearch>
        </Form>
      </Container>
    </>
  );
};

export default Search;
