import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import About from "../components/About";
import RecentBlog from "../components/blogs/RecentBlog";
import Techstack from "../components/Techstack";

export default function about() {
  return (
    <ContainerBlock title="About - Laroybafi Ahmad">
      <About />
      <Techstack />
      <RecentBlog />
    </ContainerBlock>
  );
}
