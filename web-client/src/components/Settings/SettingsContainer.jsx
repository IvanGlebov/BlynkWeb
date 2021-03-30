import {connect} from "react-redux";
import Settings from "./Settings";
import {changeNoserverMode} from "../../redux/reducers/settingsReducer";
import {switchUseV4} from "../../redux/reducers/lampReducer";

const mapStateToProps = (state) => {
    return {
        // lampSetting: {
        //     useV4: state.lamp.lampData.useV4
        // }
        useV4: state.lamp.lampData.useV4,
        noServerMode: state.settings.noServerMode
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeV4toV1: () => {
            dispatch(switchUseV4())
        },
        changeNoserverMode: () => {
            dispatch(changeNoserverMode())
        }

    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default SettingsContainer