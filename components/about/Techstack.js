/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import { Container, Grid, Card, Text, Spacer } from "@nextui-org/react";

export default function Techstack() {
  return (
    <Container>
      <Text h1>Techstack</Text>
      <Grid.Container gap={2} justify="flex-start">
        {userData.techstack.list.map((item, index) => (
          <Grid xs={6} sm={2} key={index}>
            <Card hoverable clickable width="100%">
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  objectFit="cover"
                  src={item.img}
                  width="100%"
                  height={140}
                  alt={item.title}
                />
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>{" "}
      <Spacer y={3} />
    </Container>
  );
}
