import React from "react";
import styled, { css } from "styled-components";

const Stripe = () => (
  <StripeWrapper>
    <Li color="#188ba0" />
    <Li color="#52c1ac" />
    <Li color="#f0ca4d" />
    <Li color="#f99f3e" />
    <Li color="#e15a49" />
  </StripeWrapper>
);

const StripeWrapper = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  height: 5px;
  overflow: hidden;
  background: #e15a49;
  /* position: absolute; */
  top: 0;
  left: 0;
  z-index: 6;
`;

const Li = styled.li`
  float: left;
  width: 20%;
  height: 100%;
  min-height: 100%;
  list-style: none;
  ${props =>
    props.color &&
    css`
      background: ${props.color};
    `};
`;

export default Stripe;
