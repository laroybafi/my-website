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
    </Container>
  );
}
