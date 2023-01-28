import React, { Component } from 'react'
import styles from "../../styles/StackIntroduction.module.css"

export default class StackIntroduction extends Component {
  state = {}

  render() {
    return (
        <div className={`${styles['stack-introduction']} divider`}>
            <h3 className={`${styles['stack-1']} m-0 op-5`}>Vue</h3>
            <h3 className={`${styles['stack-2']} m-0 op-8`}>React</h3>
            <h3 className={`${styles['stack-3']} m-0`}>Full stack</h3>
            <h3 className={`${styles['stack-4']} m-0 op-8`}>NodeJS</h3>
            <h3 className={`${styles['stack-5']} m-0 op-5`}>Java</h3>
        </div>
    )
  }
}