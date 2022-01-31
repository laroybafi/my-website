import React from "react";
import userData from "../../data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Grid,
  Spacer,
  Text,
  Row,
  Container,
  Progress,
} from "@nextui-org/react";

export default function Footer() {
  return (
    <Container md>
      <Spacer y={2} />
      <Row>
        <Grid.Container justify="space-between">
          <Grid xs={12} sm={3}>
            <Text blockquote>© 2022 Laroybafi Ahmad</Text>
          </Grid>
          <Grid xs={12} sm={6}></Grid>
          <Grid xs={12} sm={3}>
            <Text blockquote>Kaggle | Github | Dribble | Linkedin</Text>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={2} />
    </Container>
  );
}
