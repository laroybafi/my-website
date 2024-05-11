import React from "react";
import userData from "../../data/data";
import {
  Grid,
  Spacer,
  Text,
  Row,
  Container,
  Avatar,
  Link,
} from "@nextui-org/react";

export default function Footer() {
  return (
    <Container md>
      <Spacer y={2} />
      <Row>
        <Grid.Container>
          <Grid xs={12} sm={2} alignItems="center" justify="center">
            <Text>© 2022 Ahmad Laroy Bafi</Text>
          </Grid>
          <Grid xs={12} sm={7} alignItems="center" justify="center">
            <Text color="white">-----------------</Text>
          </Grid>
          <Grid xs={12} sm={3} alignItems="center" justify="center">
            <Link href={userData.socialLinks.github} target="_blank">
              <Avatar
                size="md"
                src="/GitHub.png"
                color="gradient"
                bordered
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.medium} target="_blank">
              <Avatar
                size="md"
                src="/medium.png"
                color="gradient"
                bordered
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.kaggle} target="_blank">
              <Avatar
                size="md"
                src="/kaggle.png"
                color="gradient"
                bordered
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.linkedin} target="_blank">
              <Avatar
                size="md"
                src="/linkedin.png"
                color="gradient"
                bordered
              />
            </Link>
            <Spacer />
            <Link href={userData.socialLinks.dribble} target="_blank">
              <Avatar
                size="md"
                src="/dribble.png"
                color="gradient"
                bordered
              />
            </Link>
          </Grid>
        </Grid.Container>
      </Row>
      <Spacer y={2} />
    </Container>
  );
}
