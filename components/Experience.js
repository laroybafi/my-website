/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Container,
  Grid,
  Row,
  Button,
  Card,
  Text,
  Col,
} from "@nextui-org/react";

export default function Experience() {
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
          EXPERIENCES
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text h2 weight="bold">
          Here's my experiences.
        </Text>
      </Row>
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
            <Text>
          I’m Braydon, a developer, creative coder, blogger and self-proclaimed
          designer who specializes in front-end development. My mission is to
          translate user-focussed designs into pixel-perfect websites or
          applications that run blazing fast. I’m currently working as a senior
          front end developer at LogicGate where I help develop an agile GRC
          cloud solution that combines powerful functionality with intuitive
          design to enhance enterprise GRC programs. Prior to LogicGate, I
          worked as a senior full-stack engineer at Cognizant where I helped
          architect and develop full-stack RESTful microservices, train and
          prepare developers for delivery, and assist in leading the front-end
          practice in a lab-based working environment. Before Cognizant, I
          worked as a UI Developer for projekt202 helping craft design systems
          and building reusable component libraries for multi-million dollar
          companies.
        </Text>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}