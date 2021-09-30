import { SET_INCREMENT,SET_DECREMENT } from "../Constants/IncDec_Constant"
export function increment(){
  return{
    type:SET_INCREMENT ,
    payload:1
  }
} 

export function decrement(){
  return{
    type:SET_DECREMENT ,
    payload:1
  }
} 