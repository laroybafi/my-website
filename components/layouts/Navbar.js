/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import {
  Grid,
  Spacer,
  Loading,
  Row,
  Container,
  Avatar,
} from "@nextui-org/react";

export default function Footer() {
  return (
    <Container md>
      <Spacer y={2} />
      <Row>
        <Grid.Container justify="center">
          <Grid xs={12} sm={2} alignItems="center" justify="center">
            <Link href="/" passhref>
              <Grid>
                <Avatar size="lg" src="/avatar.png" color="gradient" bordered />
              </Grid>
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center"></Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/">
              Home
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/about">
              About
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/experience">
              Experience
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/projects">
              Projects
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/blog">
              Blog
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center">
            <Link block underline color="black" href="/contact">
              Contact
            </Link>
          </Grid>
          <Grid xs={12} sm={1} alignItems="center" justify="center"></Grid>
          <Grid xs={12} sm={2} alignItems="center" justify="center">
            <Grid>
              <Loading type="points" size="xl" />
            </Grid>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={2} />
    </Container>
  );
}
