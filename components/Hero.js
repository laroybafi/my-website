/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
              I'm Laroy. I'm a web developer, data engineer and UI designer
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
                href="https://github.com/"
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
