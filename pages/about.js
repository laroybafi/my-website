import React from "react";
import ContainerBlock from "../components/layouts/ContainerBlock";
import About from "../components/about/About";
import RecentBlog from "../components/blogs/RecentBlog";
import Techstack from "../components/about/Techstack";

export default function about() {
  return (
    <ContainerBlock title="About - Ahmad Laroy Bafi">
      <About />
      <Techstack />
      <RecentBlog />
    </ContainerBlock>
  );
}
