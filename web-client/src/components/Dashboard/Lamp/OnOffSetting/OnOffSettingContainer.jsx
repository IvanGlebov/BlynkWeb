import OnOffSettings from "./OnOffSettings";
import {connect} from "react-redux";
// import {setOffTime, setOnTime, switchState} from "../../../../redux/reducers/lampOnOffSettingsReducer";
import {setOffTime, setOnTime, switchOnOffTime} from "../../../../redux/reducers/lampReducer";

let mapStateToProps = (state) => {
    return {
        useMode: state.lamp.onOffOnTime.useMode,
        onTime: state.lamp.onOffOnTime.onTime,
        offTime: state.lamp.onOffOnTime.offTime
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchState: () => {
            // debugger
            dispatch(switchOnOffTime())
        },
        setOnTime: (time) => {
            dispatch(setOnTime(time))
        },
        setOffTime: (time) => {
            dispatch(setOffTime(time))
        }
    }
}

const OnOffSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(OnOffSettings)
export default OnOffSettingsContainer