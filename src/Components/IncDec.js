import React, { Component } from 'react'

export default class IncDec extends Component {
  render() {
    return (
      <div>
      <h1>value={this.props.IncDec.count}</h1>
        <button onClick={this.props.increment}>add</button>
        <button onClick={this.props.decrement}>sub</button>
      </div>
    )
  }
}
