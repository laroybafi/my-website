import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import RecentBlog from "../components/blogs/RecentBlog";
import RecentProjects from "../components/projects/RecentProject";

export default function Home() {
  return (
    <ContainerBlock
    title="Laroybafi Ahmad"
  >
    <Hero />
    <RecentProjects />
    <RecentBlog />
  </ContainerBlock>
  );
}
