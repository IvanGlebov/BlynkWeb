import {combineReducers, createStore} from "redux";
import headerReducer from "./reducers/hederReducer";
import lampReducer from "./reducers/lampReducer";

let reducers = combineReducers({
    header: headerReducer,
    lamp : lampReducer
})

let store = createStore(reducers)

window.store = store

export default store