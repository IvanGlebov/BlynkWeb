import {connect} from "react-redux";
import Settings from "./Settings";
import {changeNoserverMode, changeUseV4insteadV1} from "../../redux/reducers/settingsReducer";

const mapStateToProps = (state) => {
    return {
        lampSetting: {
            useV4insteadV1: state.settings.useV4insteadV1
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeV4toV1: () => {
            dispatch(changeUseV4insteadV1())
        },
        changeNoserverMode: () => {
            dispatch(changeNoserverMode())
        }

    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default SettingsContainer