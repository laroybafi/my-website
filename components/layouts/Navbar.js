/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import NextLink from "next/link";
import {
  Grid,
  Spacer,
  Switch,
  Row,
  Container,
  Avatar,
  Link,
} from "@nextui-org/react";

export default function Footer() {
  return (
    <Container md>
      <Spacer y={2} />
      <Row>
        <Grid.Container justify="center">
          <Grid xs={12} sm={2} alignItems="center">
            <Link href="/" passHref>
              <Grid>
                <Avatar size="lg" src="/avatar.png" color="gradient" bordered />
              </Grid>
            </Link>
          </Grid>
          <Grid xs={12} sm={8} alignItems="center" justify="center">
            <Link block underline color="black" href="/">
              Home
            </Link>
            <Spacer />
            <Link block underline color="black" href="/about">
              About
            </Link>
            <Spacer />
            <Link block underline color="black" href="/experience">
              Experience
            </Link>
            <Spacer />
            <Link block underline color="black" href="/projects">
              Projects
            </Link>
            <Spacer />
            <Link block underline color="black" href="/blog">
              Blog
            </Link>
            <Spacer />
            <Link block underline color="black" href="/contact">
              Contact
            </Link>
          </Grid>
          <Grid xs={12} sm={2} alignItems="center" justify="flex-end">
          <Grid>
        <Switch shadow color="primary" checked={true}/>
    </Grid>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={2} />
    </Container>
  );
}
