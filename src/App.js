import React, { Component } from 'react'
import CounterContainer from './Container/CounterContainer'
import IncDec_Container from './Container/IncDec_Container'
export class App extends Component {
  render() {
    return (
      <div>
        {/* <CounterContainer/> */}
        <IncDec_Container/>
      </div>
    )
  }
}

export default App

