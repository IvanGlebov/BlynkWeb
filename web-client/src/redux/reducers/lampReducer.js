import axios from 'axios';

const ON_LAMP = 'ON_LAMP'
const OFF_LAMP = 'OFF_LAMP'
const CHANGE_TIME_ON_PROP = 'CHANGE_TIME_ON_PROP'
const CHANGE_IF_AWAY_PROP = 'CHANGE_IF_AWAY_PROP'
const CHANGE_LAMP_STATE = 'CHANGE_LAMP_STATE'

let initialState = {
    lampState: true,
    onTime: '12:12',
    offTime: '13:13',
    turnOnTime: false,
    offIfAway: true
}

const lampReducer = (state = initialState, action) => {
    switch (action.type){
        case ON_LAMP:
            axios
                .get('https://192.168.1.106:9443/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=0')
                // .then((response) => console.log(response.status))
            return {...state, lampState: false}

        case OFF_LAMP:
            axios
                .get('https://192.168.1.106:9443/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=1')
                // .then((response) => console.log(response.status))
            return {...state, lampState: true}

        case CHANGE_LAMP_STATE:
            return {...state, lampState: action.state}

        case CHANGE_TIME_ON_PROP:
            axios
                .get('https://192.168.1.106/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value='
                    + (action.state === true ? '1' : '0'))
                .then((response) => console.log(response.status))
            return {...state, turnOnTime: action.state}

        case CHANGE_IF_AWAY_PROP:
            axios
                .get('https://192.168.1.106/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v2?value='
                    + (action.state === true ? '1' : '0'))
                .then((response) => console.log(response.status))
            return {...state, offIfAway: action.state}

        default:
            return state
    }
}


export const turnOff = () => ({type: ON_LAMP})
export const turnOn = () => ({type: OFF_LAMP})
export const changeTimeOnProp = (state) => ({type: CHANGE_TIME_ON_PROP, state: state})
export const changeIfAwayProp = (state) => ({type: CHANGE_IF_AWAY_PROP, state: state})
export const changeLampState = (state) => ({type: CHANGE_LAMP_STATE, state: state})
export default lampReducer