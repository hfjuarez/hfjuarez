import React, { useEffect, useState, useRef } from "react";
import Header from "../components/global/Header";
import Introduction from "../components/landing/Introduction";
import Stack from "../components/landing/Stack";
import Portfolio from "../components/landing/Portfolio";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header />
        <Introduction />
        <Stack />
        <Portfolio />
      </div>
    </>
  );
}
