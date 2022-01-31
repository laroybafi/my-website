import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components'

const FooterSection = styled.div`
  height: 80px;
  background-color: #0f0f0f;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterSection>
      <p> Laroybafi Ahmad 2021 All Right Reserved</p>
    </FooterSection>
  );
}