import React from "react";
import userData from "../../data/data";
import {
  Container,
  Grid,
  Card,
  Spacer,
  Link,
  Text,
  Button,
} from "@nextui-org/react";

export default function Publications() {
  return (
    <Container>
      <h1>Educational Publications</h1>
      <h3>Here are lists of my publication during college </h3>
      <p>Check out a few of my publication!</p>
      <Grid.Container gap={2}>
      {userData.publication.list.map((item, index) => (
        <Grid xs={12} sm={6} key={index}>
        <Card hoverable>
          <Card.Header>
          <Text>{item.date}</Text>
          </Card.Header>
          <Card.Body>
          <Text h4>{item.name}</Text>
          <Text>{item.author}</Text>
          </Card.Body>
          <Card.Footer>
            <Link color="primary" target="_blank" href={item.link}>
              <Button color="gradient" auto ghost>
                Read More
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Grid>
      ))}
        </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
}
