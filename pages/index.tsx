import React from "react";
import Header from "@/components/landing/header";
import Introduction from "@/components/landing/Introduction";
import Stack from "@/components/landing/Stack";
import Portfolio from "@/components/landing/Portfolio";

export default function Home() {
  return (
    <>
        <Header />
        <Introduction />
        <Stack />
        <Portfolio />
    </>
  );
}
