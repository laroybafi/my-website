import React from "react";
import ContainerBlock from "../components/layouts/ContainerBlock";
import Experience from "../components/experience/Experience";
import Certification from "../components/experience/Certification";
import Publications from "../components/experience/Publications";
export default function experience() {
  return (
    <ContainerBlock title="Experience - Laroybafi Ahmad">
      <Experience />
      <Publications />
      <Certification />
    </ContainerBlock>
  );
}
