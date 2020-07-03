import React from "react";
import styled from "@emotion/styled";
import Container from "./common/Container";

const Footer = () => {
  return (
    <footer className="pt4 pb5 bg-white">
      <Container>
        <FooterContainer>
          <Section>
            <li>
              <SectionTitle>სამუშაოს მაძიებლებს</SectionTitle>
            </li>
            <li>
              <Link href="#4">CV / რეზიუმეს რეგისტრაცია</Link>
            </li>
            <li>
              <Link href="#4">ხშირად დასმული კითხვები</Link>
            </li>
            <li>
              <Link href="#4">კომპანიები</Link>
            </li>
          </Section>
          <Section>
            <li>
              <SectionTitle>კომპანიებს</SectionTitle>
            </li>
            <li>
              <Link href="#4">განცხადების დამატება</Link>
            </li>
            <li>
              <Link href="#4">კომპანიის რეგისტრაცია</Link>
            </li>
            <li>
              <Link href="#4">ფასები</Link>
            </li>
          </Section>
          <Section>
            <li>
              <SectionTitle>ჩვენ შესახებ</SectionTitle>
            </li>
            <li>
              <Link href="#4">დაგვიკავშირდით</Link>
            </li>
            <li>
              <Link href="#4">ბლოგი</Link>
            </li>
            <li>
              <Link href="#3">facebook</Link>
            </li>
            <li>
              <Link href="#3">linkedin</Link>
            </li>
          </Section>
        </FooterContainer>
        <div className="">
          <FooterText>&copy; 2016-2020 CV.GE</FooterText>
        </div>
      </Container>
    </footer>
  );
};

const Section = styled.ul`
  /* display: flex;
  flex-direction: column; */
`;
const FooterText = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
  padding-top: 0.75rem;
  border-top: 1px dotted #d9d9d9;
  color: gray;
`;

const Link = styled.a`
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  color: #586069;
  &:hover {
    text-decoration: underline;
  }
`;

const SectionTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  font-weight: 500;
`;

const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-gap: 1.5rem;
`;

export default Footer;
