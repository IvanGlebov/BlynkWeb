const SWITCH_STATE = "SWITCH_STATE"
const SET_OFF_TIME = "SET_OFF_TIME"
const SET_ON_TIME = "SET_ON_TIME"

let initialState = {
    onOff: false,
    onTime: '11:11',
    offTime: '02:02'
}

const lampOnOffSettingsReducer = (state = initialState, action) => {
    switch (action.type){
        case SWITCH_STATE:
            // debugger;
            console.log("Changing state to " + action.state.toString())

            return {...state, onOff: action.state}
        case SET_ON_TIME:
            return {...state, onTime: action.onTime}
        case SET_OFF_TIME:
            return {...state, offTime: action.offTime}
        default:
            return state
    }
}

export const switchState = (e) => ({type: SWITCH_STATE, state: e.target.value})
export const setOnTime = (time) => ({type: SET_ON_TIME, onTime: time})
export const setOffTime = (time) => ({type: SET_OFF_TIME, offTime: time})
export default lampOnOffSettingsReducer