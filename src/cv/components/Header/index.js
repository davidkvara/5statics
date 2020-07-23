import React from "react";
import styled from "@emotion/styled";
import Container from "../common/Container";
import SearchSection from "./SearchSection";

const Header = () => {
  return (
    <header style={{ background: "#284a63", color: "#fafafa" }}>
      <NavWrapper>
        <Logo>
          <PrimaryText>cv</PrimaryText>.ge
        </Logo>
        {/* სქროლი ნავიგაცია უნდა გავაკეთო, როგორც რეაქტის საიტზე */}
        <Nav>
          <NavLink href="#k">გამოწერა</NavLink>
          {/* <NavLink href="#k">რეგისტრაცია</NavLink> */}
          <NavLink href="#k">შესვლა</NavLink>
          <NavLink href="#k">en</NavLink>
        </Nav>
      </NavWrapper>

      <div className="pb5 pt4">
        <Container>
          <Title className="fw3">
            <PrimaryText>შექმენი CV</PrimaryText>. იპოვე სასურველი სამსახური.
          </Title>
          <Description>
            <PrimaryText>2223</PrimaryText> ვაკანსია,{" "}
            <PrimaryText>20561</PrimaryText> კომპანია,{" "}
            <PrimaryText>7931</PrimaryText> CV
          </Description>
        </Container>
      </div>

      <SearchSection />
    </header>
  );
};

const PrimaryText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

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
  font-size: 2rem;
  line-height: 1;
  text-transform: uppercase;
`;

const Title = styled.h1`
  font-size: 1.7rem;
  @media (min-width: 768px) {
    font-size: 1.9em;
  }
`;

const Description = styled.p`
  font-size: 0.95rem;
`;

export default Header;
