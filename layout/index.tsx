import React, { useEffect, Component, ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/layout/footer";
// Styles
import documentStyle from "@/styles/document.module.scss"
import styles from "./layout.module.scss";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({children, ...porps} : LayoutProps) {
  useEffect(() => {
    document.body.className = documentStyle.body;
  });
    return (
      <>
        <Head>
          <title>Hernán Fabrica</title>
          <meta name="description" content="Hello world" />
          <meta
            name="theme-colorScheme"
            content="#fff"
            media="(prefers-color-scheme: light)"
          />
          <meta
            name="theme-color"
            content="#0d0c0a"
            media="(prefers-color-scheme: dark)"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <div className={styles.main}>{children}</div>
        <Footer />
      </>
    );
}
