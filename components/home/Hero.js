/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import Image from "next/image";
import { Container, Grid, Row, Button, Spacer, Text, Link } from "@nextui-org/react";

export default function Hero() {
  return (
    <Container>
      <Spacer y={3} />
      <Grid.Container gap={1}>
        <Text blockquote>
          Almost before we knew it, we had left the ground.
        </Text>
      </Grid.Container>
      <Spacer y={1} />
      <Grid.Container justify="center">
        <Grid xs={12} sm={7}>
          <Row>
            <Text h1>
            {userData.about.title}
            </Text>
          </Row>
        </Grid>
        <Grid xs={12} sm={2} justify="center">
          <Row></Row>
        </Grid>
        <Grid xs={12} sm={3} gap={2}>
          <Row>
            <Image src="/avatar.png" alt="hero" width={260} height={260} />
          </Row>
        </Grid>
        <Grid.Container gap={1}>
          <Grid>
          <Link
                color="primary"
                target="_blank"
                href={userData.socialLinks.myresume}
              >
            <Button size="lg" color="primary" auto ghost>
              My Resume
            </Button>
          </Link>
          </Grid>
          <Grid>
            <Link href="/about" passHref>
            <Button size="lg" color="gradient" auto ghost>
              More About Me
            </Button>
            </Link>
          </Grid>
        </Grid.Container>
        <Spacer y={3} />
      </Grid.Container>
    </Container>
  );
}
