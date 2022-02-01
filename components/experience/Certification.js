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

export default function Certification() {
  return (
    <Container>
      <h1>Certification</h1>
      <h3>Here are lists of my professional certification</h3>
      <p>Check out detail of my certificate!</p>
      <Grid.Container gap={2}>
        {userData.certification.list.map((item, index) => (
          <Grid xs={12} sm={4} key={index}>
            <Card hoverable>
              <Text h4>{item.publisher}</Text>
              <Text>{item.title}</Text>
              <Card.Footer>
                <Link color="primary" target="_blank" href={item.link}>
                  <Button color="gradient" auto ghost>
                    View Certificate
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
