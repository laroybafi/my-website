/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import {
  Container,
  Grid,
  Row,
  Spacer,
  Collapse,
  Avatar,
  Link,
  Text,
} from "@nextui-org/react";

export default function Experience() {
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
          EXPERIENCES
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text h2 size={50} weight="bold" align="center">
          Here's my experiences.
        </Text>
      </Row>
      <Spacer y={3} />
      <Row>
        <Grid.Container>
          {userData.experience.list.map((item, index) => (
            <Grid xs={12} sm={12} key={index}>
              <Collapse.Group splitted>
                <Collapse
                  expanded={index === 0}
                  title={<Link href={item.link} target="_blank">
                  {item.company}
                </Link>}
                  subtitle={
                    <Text h5>{item.position}</Text>
                  }
                  contentLeft={
                    <Avatar
                      size="lg"
                      src={item.logo}
                      color="gradient"
                      bordered
                    />
                  }
                >
                  <Text size={17}>{item.description}</Text>
                </Collapse>
              </Collapse.Group>
            </Grid>
          ))}
        </Grid.Container>
      </Row>
      <Spacer y={3} />
    </Container>
  );
}
