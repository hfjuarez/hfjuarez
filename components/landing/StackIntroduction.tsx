import React, { Component } from 'react'
import styles from "../../styles/StackIntroduction.module.css"

export default class StackIntroduction extends Component {
  state = {}

  render() {
    return (
        <div className={styles['stack-introduction']}>
            <h1 className={`${styles['stack-1']} m-0 op-4`}>Vue</h1>
            <h1 className={`${styles['stack-2']} m-0 op-6`}>React</h1>
            <h1 className={`${styles['stack-3']} m-0`}>Full stack</h1>
            <h1 className={`${styles['stack-4']} m-0 op-6`}>NodeJS</h1>
            <h1 className={`${styles['stack-5']} m-0 op-4`}>Java</h1>
            <h1 className={`${styles['dev']} m-0`}>developer</h1>
        </div>
    )
  }
}