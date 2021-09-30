import React, { Component } from 'react'
import IncDec from '../Components/IncDec'
import { connect } from 'react-redux'
import { increment,decrement } from '../Actions/IncDec_Action'

 class IncDec_Container extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <IncDec {...this.props}/>
      </div>
    )
  }
}

export const mapStateToProps=(store)=>{
  return{
    IncDec:store.IncDec_Reducer
  }
}
export const mapDispatchToProps=(dispatch)=>{
  return{
    increment:()=>{
      dispatch(increment())
    },
    decrement:()=>{
      dispatch(decrement())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(IncDec_Container)
