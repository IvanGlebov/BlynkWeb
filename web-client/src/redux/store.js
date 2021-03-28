import {combineReducers, createStore} from "redux";
import headerReducer from "./reducers/hederReducer";
import lampReducer from "./reducers/lampReducer";
import lampOnOffSettingsReducer from "./reducers/lampOnOffSettingsReducer";

let reducers = combineReducers({
    header: headerReducer,
    lamp: lampReducer,
    lampOnOffSettings: lampOnOffSettingsReducer
})

let store = createStore(reducers)

window.store = store

export default store