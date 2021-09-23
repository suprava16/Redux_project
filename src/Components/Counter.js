import React, { Component } from 'react'

export class Counter extends Component {

  render() {
    return (
      <div>
        <button onClick={setCounter}>Add</button>
      </div>
    )
  }
}

export default Counter
