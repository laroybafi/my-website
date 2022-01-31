import {
  Grid,
  Button,
  Card,
  Col,
  Text,
  Row,
  Container,
  Spacer,
} from "@nextui-org/react";

export default function Blog() {
  return (
    <Container>
      <h1>Blog</h1>
      <h3>I love to share my knowledge through writing.</h3>
      <p>Check out a few of my most recent publishings.</p>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Card hoverable cover css={{ w: "100%", p: 0 }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  Your day your way
                </Text>
                <Text h3 color="white">
                  Your checklist for better sleep
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src="/images/card-example-2.jpeg"
                height={400}
                width="100%"
                alt="Relaxing app background"
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
                        src="/images/breathing-app-icon.jpeg"
                        style={{ background: "black" }}
                        height={40}
                        width={40}
                        alt="Breathing app icon"
                      />
                    </Col>
                    <Col>
                      <Text color="#d1d1d1" size={12}>
                        Breathing App
                      </Text>
                      <Text color="#d1d1d1" size={12}>
                        Get a good nights sleep.
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Get App
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card hoverable cover css={{ w: "100%", p: 0 }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  Your day your way
                </Text>
                <Text h3 color="white">
                  Your checklist for better sleep
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src="/images/card-example-2.jpeg"
                height={400}
                width="100%"
                alt="Relaxing app background"
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
                        src="/images/breathing-app-icon.jpeg"
                        style={{ background: "black" }}
                        height={40}
                        width={40}
                        alt="Breathing app icon"
                      />
                    </Col>
                    <Col>
                      <Text color="#d1d1d1" size={12}>
                        Breathing App
                      </Text>
                      <Text color="#d1d1d1" size={12}>
                        Get a good nights sleep.
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Get App
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
        <Grid xs={12} sm={4}>
          <Card hoverable cover css={{ w: "100%", p: 0 }}>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
              <Col>
                <Text
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  color="#9E9E9E"
                >
                  Your day your way
                </Text>
                <Text h3 color="white">
                  Your checklist for better sleep
                </Text>
              </Col>
            </Card.Header>
            <Card.Body>
              <Card.Image
                src="/images/card-example-2.jpeg"
                height={400}
                width="100%"
                alt="Relaxing app background"
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
                        src="/images/breathing-app-icon.jpeg"
                        style={{ background: "black" }}
                        height={40}
                        width={40}
                        alt="Breathing app icon"
                      />
                    </Col>
                    <Col>
                      <Text color="#d1d1d1" size={12}>
                        Breathing App
                      </Text>
                      <Text color="#d1d1d1" size={12}>
                        Get a good nights sleep.
                      </Text>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Row justify="flex-end">
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      <Text
                        css={{ color: "inherit" }}
                        size={12}
                        weight="bold"
                        transform="uppercase"
                      >
                        Get App
                      </Text>
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid>
          <Button size="lg" color="gradient" auto ghost>
            See All My Articles
          </Button>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
}
