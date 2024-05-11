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

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/laroybafi/repos");
  const repos = await res.json();
  return { props: { repos } }
}

export default function RecentProjects({ repos }) {
  return (
    <Container>
      <h1>Recent Projects</h1>
      <h3>Here are lists of the latest projects that I have worked on</h3>
      <p>Check out a few of my most recent repositories.</p>
      
      <Grid.Container gap={2}> 
        {repos?.map((repo) => (
          <Grid xs={12} sm={4} key={id}>
            <Card hoverable>
              <Text h4>{repo.name}</Text>
              <Text>🚀{repo.description}</Text>
              <Card.Footer>
                <Link color="primary" target="_blank" href={repo.html_url}>
                  <Button color="gradient">
                    {" "}
                    Visit source code on GitHub.{" "}
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Grid.Container gap={2}>
        <Grid>
          <Link href="/projects" passhref="true">
            {" "}
            <Button size="lg" color="gradient" auto ghost>
              See All My Projects
            </Button>{" "}
          </Link>
        </Grid>
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
}
