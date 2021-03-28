import axios from 'axios';

const LAMP_TO_ON = "LAMP_TO_ON"
const LAMP_TO_OFF = "LAMP_TO_OFF"

let initialState = {
    lampState: true,
    // onTime: '12:12',
    // offTime: '13:13',
    turnOnTime: false,
    offIfAway: true
}

const lampReducer = (state = initialState, action) => {
    switch (action.type){
        case LAMP_TO_ON:
            axios
                .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=1')
                // .then((response) => console.log(response.status))
            return {...state, lampState: true}

        case LAMP_TO_OFF:

            axios
                .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/update/v1?value=0')
                // .then((response) => console.log(response.status))

            return {...state, lampState: false}

        default:
            return state
    }
}

export const turnLampOn = () => ({type: LAMP_TO_ON})
export const turnLampOff = () => ({type: LAMP_TO_OFF})

export default lampReducer