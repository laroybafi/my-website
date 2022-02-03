import React from "react";
import ContainerBlock from "../components/layouts/ContainerBlock";
import Projects from "../components/projects/Projects";
import DataAnalysis from "../components/projects/DataAnalysis";
import UserInterface from "../components/projects/UserInterface";
import WebsiteDevelopment from "../components/projects/WebsiteDevelopment";

export default function projects() {
  return (
    <ContainerBlock title="Projects - Ahmad Laroy Bafi">
      <Projects />
      <UserInterface />
      <DataAnalysis />
      <WebsiteDevelopment />
    </ContainerBlock>
  );
}
