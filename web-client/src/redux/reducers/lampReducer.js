import axios from 'axios';

const LAMP_TO_ON = "LAMP_TO_ON"
const LAMP_TO_OFF = "LAMP_TO_OFF"

const SWITCH_USE_V4 = "SWITCH_USE_V4"

const SWITCH_ON_OFF_TIME = "SWITCH_ON_OFF_TIME"

const SET_ON_TIME = "SET_ON_TIME"
const SET_OFF_TIME = "SET_OFF_TIME"

let initialState = {
    lampState: true,
    turnOnTime: false,
    offIfAway: true,
    lampData: {
        useV4: true
    },
    onOffOnTime: {
        useMode: false,
        onTime: "09:12",
        offTime: "23:13"
    },
    onOffItAway: {
        useMode: false,
        awayTime: "5"  // Time in minutes

    }


}

const lampReducer = (state = initialState, action) => {


    switch (action.type) {
        case LAMP_TO_ON:
            // if ()
            if (state.lampData.useV4) {
                axios
                    .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v4?value=1')
                    .then((response) => {
                        return {...state, lampState: true}
                    })
            } else {
                axios
                    .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=1')
                    .then((response) => {
                        return {...state, lampState: true}
                    })
            }
            return {...state, lampState: true}
        case LAMP_TO_OFF:
            if (state.lampData.useV4) {
                axios
                    .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v4?value=0')
                    .then((response) => {
                        return {...state, lampState: true}
                    })
            } else {
                axios
                    .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=0')
                    .then((response) => {
                        return {...state, lampState: true}
                    })
            }
            return {...state, lampState: false}
        case SWITCH_USE_V4:
            return {
                ...state,
                lampData: {
                    useV4: !state.lampData.useV4
                }
            }
        case SWITCH_ON_OFF_TIME:
            return {
                ...state,
                onOffOnTime: {
                    useMode: !state.onOffOnTime.useMode,
                    onTime: state.onOffOnTime,
                    offTime: state.onOffOnTime. offTime
                }
            }
        case SET_ON_TIME:
            // debugger
            return {
                ...state,
                onOffOnTime: {
                    useMode: state.onOffOnTime.useMode,
                    onTime: action.value,
                    offTime: state.onOffOnTime.offTime
                }
            }
        case SET_OFF_TIME:
            return {
                ...state,
                onOffOnTime: {
                    useMode: state.onOffOnTime.useMode,
                    onTime: state.onOffOnTime.onTime,
                    offTime: action.value
                }
            }
        default:
            // return {state, lampData: state.lampData}
            return state
    }
}


export const turnLampOn = (mode) => ({type: LAMP_TO_ON, mode: mode})
export const turnLampOff = (mode) => ({type: LAMP_TO_OFF, mode: mode})

export const switchUseV4 = () => ({type: SWITCH_USE_V4})

export const switchOnOffTime = () => ({type: SWITCH_ON_OFF_TIME})
export const setOnTime = (e) => ({type: SET_ON_TIME, value: e})
export const setOffTime = (e) => ({type: SET_OFF_TIME, value: e})

export default lampReducer