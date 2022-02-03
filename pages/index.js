import ContainerBlock from "../components/layouts/ContainerBlock";
import Hero from "../components/home/Hero";
import RecentBlog from "../components/blogs/RecentBlog";
import RecentProjects from "../components/projects/RecentProject";

export default function Home() {
  return (
    <ContainerBlock
    title="Ahmad Laroy Bafi - Lucky Noob Software Engineer"
  >
    <Hero />
    <RecentProjects />
    <RecentBlog />
  </ContainerBlock>
  );
}
