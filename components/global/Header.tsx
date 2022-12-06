import React, { Component } from 'react'
import styles from '../../styles/Header.module.css'

export default class Header extends Component {
  state = {
    stack: [
        "Vue",
        "React",
        "Java",
        "NodeJS",
        "Full Stack"
    ],
    actualText: "",
    index: 0,
    intervalId: undefined
  }

  componentDidMount() { 
    this.setState({ actualText: this.state.stack[0] })
    const intervalId = setInterval(() => {
      if ( this.state.index<this.state.stack.length ) {
        this.setState({ actualText: this.state.stack[this.state.index] });
        this.setState({index: this.state.index+1});
      }else{
        clearInterval(this.state.intervalId)
      }
    }, 700)
    this.setState({ intervalId })
  }

  render() {
    return (
      <header className={styles.header}>
        <h1 className="m-0">
          Hello,
          <br/> 
          I&apos;m Hernán. 
          <br/> 
          <span className='op-8'>Full stack developer</span>
          {/* <span className={styles['dynamic-stack']}>{ this.state.actualText }</span> <span className="op-6">Developer</span> */}
        </h1>

      </header>
    )
  }
}