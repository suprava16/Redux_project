import combineReducer from "./Reducers/index"
import {createStore} from "redux"
let store=createStore(combineReducer)
export default store;
