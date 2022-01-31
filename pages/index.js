import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Blog from "../components/blogs/Blog";
import RecentProjects from "../components/projects/RecentProject";

export default function Home() {
  return (
    <ContainerBlock
    title="Laroybafi Ahmad"
  >
    <Hero />
    <RecentProjects />
    <Blog />
  </ContainerBlock>
  );
}
