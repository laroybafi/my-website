/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../data/data";
import {
  Container,
  Grid,
  Row,
  Button,
  Card,
  Text,
  Col,
} from "@nextui-org/react";

export default function About() {
  return (
    <Container>
      <Row justify="center" align="center">
        <Text
          h1
          size={20}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          CONTACT ME
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text h2 weight="bold">
        Get in touch, let's talk.
        </Text>
      </Row>
      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={5}>
            <Card cover css={{ w: "100%" }}>
            <Card.Image
                  src="/bafi.jpg"
                  height={400}
                  width="100%"
                  alt="Relaxing app background"
                />
            </Card>
          </Grid>
          <Grid xs={12} sm={7}>
            <Card>
            <Text>
            {userData.about.title}
        </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}
