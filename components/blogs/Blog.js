/* eslint-disable react/no-unescaped-entities */
import React from "react";
import userData from "../../data/data";
import {
  Grid,
  Button,
  Card,
  Col,
  Text,
  Row,
  Container,
  Spacer,
  Link,
} from "@nextui-org/react";

export default function Blog() {
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
          MY BLOG
        </Text>
      </Row>
      <Row justify="center" align="center">
        <Text h2 size={50} weight="bold" align="center">
          Insightful and helpful <br />
          content curated for you.
        </Text>
      </Row>
      <Spacer y={3} />
      <Row>
       <Card>
       <Grid.Container gap={2}>
          {userData.blogs.list.map((item, index) => (
            <Grid xs={12} sm={4} key={index}>
              <Card hoverable cover css={{ w: "100%", p: 0 }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#CBECFE"
                    >
                      {item.category}
                    </Text>
                    <Text h3 color="white">
                      {item.title}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body>
                  <Card.Image
                    src={item.img}
                    height={400}
                    width="100%"
                    alt="picture"
                  />
                </Card.Body>
                <Card.Footer
                  blur
                  css={{
                    position: "absolute",
                    bgBlur: "#0f1114",
                    borderTop: "$borderWeights$light solid $gray700",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Row>
                    <Col>
                      <Row>
                        <Col span={3}>
                          <Card.Image
                            src={item.src_image}
                            style={{ background: "black" }}
                            height={40}
                            width={40}
                            alt={item.src_tittle}
                          />
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end">
                        <Link target="_blank" href={item.link}>
                          <Button auto color="gradient" rounded bordered ghost>
                            Read More
                          </Button>
                        </Link>
                      </Row>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
       </Card>
      </Row>
    </Container>
  );
}
