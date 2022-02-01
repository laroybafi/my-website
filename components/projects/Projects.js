/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import {
  Container,
  Grid,
  Row,
  Spacer,
  Card,
  Text,
  Col,
} from "@nextui-org/react";

export default function Certification() {
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
          PROJECTS
        </Text>
      </Row>
      <Row justify="center" align="center">
      <Text h2 size={50} weight="bold" align="center">
          A selection of my favorite works.
        </Text>
      </Row>
      <Spacer y={3} />
      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={5}>
            <Card cover css={{ w: "100%" }}>
              <Card.Image
                src="/images/card-example-5.jpeg"
                height={400}
                width="100%"
                alt="Relaxing app background"
              />
            </Card>
          </Grid>
          <Grid xs={12} sm={7}>
            <Card>
              <Text>{userData.about.title}</Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}
