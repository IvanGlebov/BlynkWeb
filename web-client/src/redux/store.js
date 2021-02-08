import {combineReducers, createStore} from "redux";
import headerReducer from "./reducers/hederReducer";

let reducers = combineReducers({
    header: headerReducer
})

let store = createStore(reducers)

window.store = store

export default store