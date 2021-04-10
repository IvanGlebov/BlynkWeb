import axios from 'axios';

const LAMP_TO_ON = "LAMP_TO_ON"
const LAMP_TO_OFF = "LAMP_TO_OFF"

const SWITCH_USE_V4 = "SWITCH_USE_V4"

const SWITCH_ON_OFF_TIME = "SWITCH_ON_OFF_TIME"

const SET_ON_TIME = "SET_ON_TIME"
const SET_OFF_TIME = "SET_OFF_TIME"

// const SWITCH_DEBUG = "SWITCH_DEBUG"
const SWITCH_NO_SERVER_MODE = "SWITCH_NO_SERVER_MODE"
const SWITCH_DEVELOPER_SHOW = "SWITCH_DEVELOPER_SHOW"

const SWITCH_DEVELOPER_SHOW_LOADED = "SWITCH_DEVELOPER_SHOW_LOADED"
const SET_DEVELOPER_SHOW = "SET_DEVELOPER_SHOW"
let initialState = {
    noServerMode: false,
    lampState: true,
    turnOnTime: false,
    offIfAway: true,
    showDeveloperSettings: true,
    showDeveloperSettingsLoaded: false,
    lampData: {
        useV4: false
    },
    onOffOnTime: {
        useMode: false,
        onTime: "09:12",
        offTime: "23:13"
    },
    onOffItAway: {
        useMode: false,
        awayTime: "5"  // Time in minutes
    },
    blynkSettings: {
        pins: {
            noServerMode: "v100",
            useV4: "v101",
            lampState: "v1",
            onOffOnTime: "v102",
            onOffIfAway: "v103",
            lampSettings: "v104"
        },
        serverIp: "https://serverblynk.iota02.keenetic.link/",
        lampKey: "fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7",


    }


}

const lampReducer = (state = initialState, action) => {
    // Test request forming for the future using
    let request = state.blynkSettings.serverIp + state.blynkSettings.lampKey + "/update/"
        + state.blynkSettings.pins.lampState + "?value=" + (state.lampState ? "0" : "1")
    let mainReqPart = state.blynkSettings.serverIp + state.blynkSettings.lampKey

    switch (action.type) {
        case LAMP_TO_ON:
            if (!state.noServerMode) {
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
            }
            return {...state, lampState: true}
        case LAMP_TO_OFF:
            if (!state.noServerMode) {
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
                    offTime: state.onOffOnTime.offTime
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
        case SWITCH_NO_SERVER_MODE:
            return {...state, noServerMode: !state.noServerMode}
        case SWITCH_DEVELOPER_SHOW:
            axios
                .get(state.blynkSettings.serverIp
                    + state.blynkSettings.lampKey
                    + "/update/"
                    + state.blynkSettings.pins.lampSettings
                    + "?value="
                    + (state.showDeveloperSettings === true ? "0" : "1"))
                .then()
            return {...state, showDeveloperSettings: !state.showDeveloperSettings}
        case SWITCH_DEVELOPER_SHOW_LOADED:
            if (action.value === true) {
                // debugger
                return {...state, showDeveloperSettingsLoaded: true}

            } else {
                // debugger
                return {...state, showDeveloperSettingsLoaded: false}
            }
        case SET_DEVELOPER_SHOW:
            // debugger;
            if (action.value[0] === "1") {
                // debugger
                return {...state, showDeveloperSettings: true}
            } else {
                // debugger
                return {...state, showDeveloperSettings: false}
            }
        // return
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

export const switchNoServerMode = () => ({type: SWITCH_NO_SERVER_MODE})
export const switchDeveloperShow = () => ({type: SWITCH_DEVELOPER_SHOW})

export const switchDeveloperShowLoaded = (e) => ({type: SWITCH_DEVELOPER_SHOW_LOADED, value: e})
export const setDeveloperShow = (e) => ({type: SET_DEVELOPER_SHOW, value: e})

export default lampReducer