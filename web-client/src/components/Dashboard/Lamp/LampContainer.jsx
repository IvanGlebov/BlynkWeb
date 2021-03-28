import {connect} from "react-redux";
import Lamp from "./Lamp";
import {turnLampOff, turnLampOn} from "../../../redux/reducers/lampReducer";
// import {
    // changeIfAwayProp,
    // changeLampState,
    // changeTimeOnProp,
    // turnOff,
    // turnOn
// } from "../../../redux/reducers/lampReducer";

const mapStateToProps = (state) => {
    return {
        onTime: state.lamp.onTime,
        offTime: state.lamp.offTime,
        lampState: state.lamp.lampState,
        offIfAway: state.lamp.offIfAway
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // turnOn: () => {
        //     dispatch(turnOn())
        // },
        // turnOff: () => {
        //     dispatch(turnOff())
        // },
        // changeLampState: (value) => {
        //     dispatch(changeLampState(value))
        // }

        turnLampOn: () => {
            dispatch(turnLampOn())
            // alert("Turn ON")
        },
        turnLampOff: () => {
            dispatch(turnLampOff())
            // alert("Turn OFF")
        }
    }
}

const LampContainer = connect(mapStateToProps, mapDispatchToProps)(Lamp)
export default LampContainer