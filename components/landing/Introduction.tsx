import React, { Component } from 'react'
import styles from "../../styles/Introduction.module.css"

export default class Introduction extends Component {
  state = {}

  render() {
    return (
        <div className={`${styles['introduction']} divider`}>
            <h2>
                Ambitious developer
                <br/>
                for <em>ambitious</em> companies.
            </h2>
        </div>
    )
  }
}