import React, { Component } from 'react'
import styles from '../../styles/Header.module.css'

type Props = {}

type State = {}

export default class Header extends Component<Props, State> {
  state = {
    stack: [
        "Vue",
        "React",
        "NodeJS",
        "Java"
    ],
    finalText: "Full Stack"
  }

  render() {
    return (
      <header className={styles.header}>
        <h3 className="op-4 m-0">
            Hello,
        </h3>
        <h1 className="m-0">
            I&apos;m Hernán. 
        </h1>
        <h2 className="op-6 m-0">
            {{ randomStack }} Developer
        </h2>

      </header>
    )
  }
}