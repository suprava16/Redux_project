import { combineReducers } from "redux"
import { CounterReducer } from "./CounterReducer"
import { IncDec_Reducer } from "./IncDec_Reducer"

export default combineReducers({
  CounterReducer,
  IncDec_Reducer
})