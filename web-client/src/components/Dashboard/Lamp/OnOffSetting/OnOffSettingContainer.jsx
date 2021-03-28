import OnOffSettings from "./OnOffSettings";
import {connect} from "react-redux";
import {setOffTime, setOnTime, switchState} from "../../../../redux/reducers/lampOnOffSettingsReducer";

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchState: (e) => {
            // debugger;
            dispatch(switchState(e))
            // debugger;
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