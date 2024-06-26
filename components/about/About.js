/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import { Container, Grid, Row, Card, Text, Spacer } from "@nextui-org/react";

export default function About() {
  return (
    <Container>
      <Spacer y={3} />
      <Row justify="center" align="center">
        <Text
          h1
          size={25}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          ABOUT ME
        </Text>
      </Row>
      <Row justify="center" align="center">
      <Text h2 size={50} weight="bold" align="center">
          Here's my story.
        </Text>
      </Row>
      <Spacer y={3} />
      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={7}>
            <Card>
              <Text textweights ='semibold'>{userData.about.description}</Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={3} />
    </Container>
  );
}
