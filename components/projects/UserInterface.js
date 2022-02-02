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

export default function UserInterface() {
  return (
    <Container>
      <Card>
        <Text blockquote weight="bold" size={25}>{userData.uidesign.title}</Text>
        <Grid.Container gap={2}>
          {userData.uidesign.list.map((item, index) => (
            <Grid xs={12} sm={6} key={index}>
              <Card hoverable cover css={{ w: "100%", p: 0 }}>
                <Card.Body>
                  <Card.Image
                    src={item.img}
                    height="100%"
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
                        <Col span={12}>
                        <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#CBECFE"
                    >
                      {item.title}
                    </Text>
                    <Text h4 color="white">
                      {item.description}
                    </Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col>
                      <Row justify="flex-end" alignItem="center">
                        <Link target="_blank" href={item.link}>
                          <Button auto color="gradient" rounded bordered ghost>
                            Detail
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
      <Spacer y={2} />
    </Container>
  );
}
