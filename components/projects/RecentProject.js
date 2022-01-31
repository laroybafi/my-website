import React from "react";
import userData from "../../data/data";
import { Container, Grid, Card, Spacer, Link, Text, Button } from "@nextui-org/react";

export default function RecentProjects() {
  return (
    <Container>
      <h1>Recent Projects</h1>
      <h3>I love to share my knowledge through writing.</h3>
      <p>Check out a few of my most recent publishings.</p>
      <Grid.Container gap={2}>
        <Grid>
          <Card hoverable>
            <Text h4>Next UI</Text>
            <Text>🚀 Beautiful and modern React UI library.</Text>
            <Card.Footer>
              <Link
                color="primary"
                target="_blank"
                href="https://github.com/nextui-org/nextui"
              >
               <Button color="gradient">  Visit source code on GitHub. </Button>
              </Link>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
      <Grid.Container gap={2}>
        <Grid>
          <Button size="lg" color="gradient" auto ghost>
            See All My Projects
          </Button>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
}
