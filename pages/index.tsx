import React from "react";
import Header from "../components/global/Header";
import Introduction from "../components/landing/Introduction";
import Stack from "../components/landing/Stack";
import Portfolio from "../components/landing/Portfolio";

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
