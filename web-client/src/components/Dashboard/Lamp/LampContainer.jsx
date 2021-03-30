import {connect} from "react-redux";
import Lamp from "./Lamp";
import {turnLampOff, turnLampOn} from "../../../redux/reducers/lampReducer";


const mapStateToProps = (state) => {
    return {
        onTime: state.lamp.onTime,
        offTime: state.lamp.offTime,
        lampState: state.lamp.lampState,
        offIfAway: state.lamp.offIfAway,
        useV4: state.lamp.lampData.useV4
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        turnLampOn: () => {
            dispatch(turnLampOn(true))
        },
        turnLampOff: () => {
            dispatch(turnLampOff(true))
        }
    }
}

const LampContainer = connect(mapStateToProps, mapDispatchToProps)(Lamp)
export default LampContainer