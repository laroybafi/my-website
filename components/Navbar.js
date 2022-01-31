import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';
import { Grid, Avatar } from "@nextui-org/react";

const Nav = styled.nav`
  height: 80px;
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled.a`
  padding: 0 2rem`;

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  return (
    <Nav>
      <div>
        <Link href="/" passHref>
          <Grid>
            <Avatar size="lg" src="/avatar.png" color="gradient" bordered />
          </Grid>
        </Link>
      </div>
      <div>
        <Link href="/" passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href="/about" passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href="/experience" passHref>
          <StyledLink>Experience</StyledLink>
        </Link>
        <Link href="/projects" passHref>
          <StyledLink>Project</StyledLink>
        </Link>
        <Link href="/blog" passHref>
          <StyledLink>Blog</StyledLink>
        </Link>
        <Link href="/contact" passHref>
          <StyledLink>Contact</StyledLink>
        </Link>
      </div>
    </Nav>
  );
}