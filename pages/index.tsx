import React from "react";
// Components
import Container from "@/components/common/layout/container";
import Hero from "@/components/hero";
import Introduction from "@/components/introduction";
import Stack from "@/components/stack";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <>
        <Hero />
        <Container as="main">
          <Introduction />
          <Stack />
          <Portfolio />
        </Container>
    </>
  );
}
