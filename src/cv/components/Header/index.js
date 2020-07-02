import React from "react";
import styled from "@emotion/styled";
import Container from "../common/Container";
import SearchSection from "./SearchSection";

const Header = () => {
  return (
    <header style={{ background: "#284a63", color: "#fafafa" }}>
      <NavWrapper>
        <Logo>cv</Logo>
        {/* სქროლი ნავიგაცია უნდა გავაკეთო, როგორც რეაქტის საიტზე */}
        <Nav>
          <NavLink href="#k">გამოწერა</NavLink>
          <NavLink href="#k">რეგისტრაცია</NavLink>
          <NavLink href="#k">შესვლა</NavLink>
          <NavLink href="#k">en</NavLink>
        </Nav>
      </NavWrapper>

      <div className="pb5 pt4">
        <Container>
          <Title className="fw3">
            <span className="primary">შექმენი CV</span>. იპოვე სასურველი
            სამსახური.
          </Title>
          <p>
            <span className="primary">2223</span> ვაკანსია,{" "}
            <span className="primary">20561</span> კომპანია,{" "}
            <span className="primary">7931</span> CV
          </p>
        </Container>
      </div>

      <SearchSection />
    </header>
  );
};

const NavWrapper = styled.header`
  max-width: 1170px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0 1rem;
  margin-left: 1.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  display: block;
  color: inherit;
  margin: 0 0.8rem;
  font-size: 0.95rem;
`;

const Logo = styled.div`
  font-size: 1.4rem;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export default Header;
