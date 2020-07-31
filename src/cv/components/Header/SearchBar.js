import React from "react";
import styled from "@emotion/styled";

import Container from "../common/Container";
import SearchInput from "../common/Input";
import Button from "../common/Button";

const SearchBar = () => {
  return (
    <div style={{ background: "steelblue" }}>
      <Container>
        <Form>
          <SearchInput type="text" placeholder="საძიებო სიტყვა" />
          <SearchInput type="text" placeholder="მდებარეობა" />
          <SearchInput type="text" placeholder="კატეგორია" />
          <Button type="button">ძებნა</Button>
        </Form>
      </Container>
    </div>
  );
};

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  padding: 2rem 0;
  font: inherit;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default SearchBar;
