import React, { Component, ReactNode } from 'react'
import Head from 'next/head'
import Navbar from './global/Navbar';
import Footer from './global/Footer';
import styles from '../../styles/Layout.module.css'

type Props = {
    children: ReactNode
}

type State = {}

export default class Layout extends Component<Props, State> {
  state = {}

  render() {
    return (
      <>
        <Head>
            <title>Hernán Fabrica</title>
            <meta name="description" content="Hello world" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar/>
        <main className={styles.main}>
          {this.props.children}
        </main>
        <Footer/>
      </>
    )
  }
}