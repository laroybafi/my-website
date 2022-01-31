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

export default function Techstack() {
  const list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Advocato",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
  ];
  return (
    <Container>
      <Text h1>Techstack</Text>
      <Grid.Container gap={2} justify="flex-start">
        {list.map((item, index) => (
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
    </Container>
  );
}
