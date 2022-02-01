/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import {
  Container,
  Grid,
  Row,
  Card,
  Text,
  Spacer,
  Link,
  Button,
  Collapse,
  Avatar,
} from "@nextui-org/react";

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
          CONTACT ME
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text h2 size={50} weight="bold" align="center">
          Get in touch, let's talk.
        </Text>
      </Row>
      <Spacer y={3} />
      <Row>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={5}>
            <Card>
              <Text h3 weight="bold">
                {userData.contact.title}
              </Text>
              <Text h5>{userData.contact.description}</Text>
              <Text>Email : {userData.email}</Text>
              <Spacer y={2} />
              <Text h3 weight="bold">
                {userData.contact.hire}
              </Text>
              <Text h5>{userData.contact.schedule}</Text> <Spacer y={0.5} />
              <Link
                color="primary"
                target="_blank"
                href={userData.contact.calendly}
              >
                <Button size="sm" color="primary" auto ghost>
                  Schedule Meet
                </Button>
              </Link>
              <Spacer y={2} />
              <Text h3 weight="bold">
                {userData.socialLinks.title}
              </Text>
              <Text>
                <Link href={userData.socialLinks.linkedin} color underline>
                  LinkedIn
                </Link>
              </Text>
              <Text>
                <Link href={userData.socialLinks.instagram} color underline>
                  Instagram
                </Link>
              </Text>
              <Text>
                <Link href={userData.socialLinks.facebook} color underline>
                  Facebook
                </Link>
              </Text>
              <Text>
                <Link href={userData.socialLinks.twitter} color underline>
                  Twitter
                </Link>
              </Text>
            </Card>
          </Grid>
          <Grid xs={12} sm={7}>
            <Card>
              <Text h3 weight="bold">
                {userData.recommendation.title}
              </Text>
              <Grid.Container>
                {userData.recommendation.list.map((item, index) => (
                  <Grid xs={12} sm={12} key={index}>
                    <Collapse.Group splitted>
                      <Collapse
                      expanded
                        title={<Text h4>{item.name}</Text>}
                        subtitle={
                          <Text>
                            {item.position}
                          </Text>
                        }
                        contentLeft={
                          <Avatar
                            size="lg"
                            src={item.photo}
                            color="gradient"
                            bordered
                          />
                        }
                      >
                        <Text>{item.description}</Text>
                      </Collapse>
                    </Collapse.Group>
                  </Grid>
                ))}
              </Grid.Container>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>
  );
}
