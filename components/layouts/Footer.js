import React from "react";
import userData from "../../data/data";
import Link from "next/link";
import { useRouter } from "next/router";
import { Grid, Spacer, Text, Row, Container, Avatar } from "@nextui-org/react";

export default function Footer() {
  return (
    <Container md>
      <Spacer y={2} />
      <Row>
        <Grid.Container>
          <Grid xs={12} sm={2} alignItems="center" justify="center">
            <Text>© 2022 Laroybafi Ahmad</Text>
          </Grid>
          <Grid xs={12} sm={7} alignItems="center" justify="center"> 
          <Text color="white">-----------------</Text>
          </Grid>
          <Grid xs={12} sm={3} alignItems="center" justify="center">
            <Link href={userData.socialLinks.github} passHref target="_blank">
              <Avatar
                size="md"
                src="/GitHub.png"
                color="gradient"
                bordered
                clickable
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.medium} passHref target="_blank">
              <Avatar
                size="md"
                src="/medium.png"
                color="gradient"
                bordered
                clickable
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.kaggle} passHref target="_blank">
              <Avatar
                size="md"
                src="/kaggle.png"
                color="gradient"
                bordered
                clickable
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.linkedin} passHref target="_blank">
              <Avatar
                size="md"
                src="/linkedin.png"
                color="gradient"
                bordered
                clickable
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.dribble} passHref target="_blank">
              <Avatar
                size="md"
                src="/dribble.png"
                color="gradient"
                bordered
                clickable
              />
            </Link>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={2} />
    </Container>
  );
}
