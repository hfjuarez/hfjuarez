import React, { Component, ReactNode } from 'react'
import Head from 'next/head'
import Navbar from '../Navbar/index';
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
          <div className={styles['main-content']}>
            {this.props.children}
          </div>
        </main>
      </>
    )
  }
}