import {connect} from "react-redux";
import Lamp from "./Lamp";
import {
    changeIfAwayProp,
    changeLampState,
    changeTimeOnProp,
    turnOff,
    turnOn
} from "../../../redux/reducers/lampReducer";

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
        turnOn: () => {
            dispatch(turnOn())
        },
        turnOff: () => {
            dispatch(turnOff())
        },
        changeTimeOnProp: (e) => {
            dispatch(changeTimeOnProp(e.target.checked))
        },
        changeIfAwayProp: (e) => {
            dispatch(changeIfAwayProp(e.target.checked))
        },
        changeLampState: (value) => {
            dispatch(changeLampState(value))
        }

    }
}

const LampContainer = connect(mapStateToProps, mapDispatchToProps)(Lamp)
export default LampContainer