import React, { Component } from 'react'

export class Counter extends Component {

  render() {
    console.log(this.props)
    const{counting,setCounter}=this.props
    return (
      <div>
      <h1>value={counting.count}</h1>
        <button onClick={setCounter}>Add</button>
      </div>
    )
  }
}

export default Counter
