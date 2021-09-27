import React, { Component } from 'react'
import Counter from '../Components/Counter'
import { connect } from 'react-redux'
import { setCounter } from '../Actions/CounterActions'
class CounterContainer extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <Counter {...this.props}/>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    counting: store.CounterReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCounter: () => {
      dispatch(setCounter())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
