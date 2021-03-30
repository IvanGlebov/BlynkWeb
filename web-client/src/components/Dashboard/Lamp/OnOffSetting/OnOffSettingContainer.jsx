import OnOffSettings from "./OnOffSettings";
import {connect} from "react-redux";
import {setOffTime, setOnTime, switchState} from "../../../../redux/reducers/lampOnOffSettingsReducer";
import {switchOnOffTime} from "../../../../redux/reducers/lampReducer";

let mapStateToProps = (state) => {
    return {
        useMode: state.lamp.onOffOnTime.useMode
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchState: () => {
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