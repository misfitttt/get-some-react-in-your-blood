import React, {useState} from 'react'
import Age from './age'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date(), list: []};
  }
  componentDidMount() {
    this.timer= setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  tick() {
    console.log('ticking');
    this.setState({date: new Date()})
  }
  // Welcome {list.map(item => item)}
  render() {
    // const {list} = this.state
    return (
      <div>
      <h1></h1>
      <h1>{this.state.date.toLocaleTimeString()}</h1>
      <button onClick={() => window.history.go(-1)}>sign in</button>
      <Age />
      </div>
    )
  }
}


export default Home
