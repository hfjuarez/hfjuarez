import React, { Component, ReactNode } from "react";
import Head from "next/head";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import styles from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

type State = {};

export default class Layout extends Component<Props, State> {
  state = {};

  render() {
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
        <div className={styles.main}>{this.props.children}</div>
        <Footer />
      </>
    );
  }
}
