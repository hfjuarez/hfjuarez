import React from "react";
import Header from "@/components/hero";
import Introduction from "@/components/landing/Introduction";
import Stack from "@/components/landing/Stack";
import Portfolio from "@/components/landing/Portfolio";

export default function Home() {
  return (
    <>
        <Header />
        <main>
          <Introduction />
          <Stack />
          <Portfolio />
        </main>
    </>
  );
}
