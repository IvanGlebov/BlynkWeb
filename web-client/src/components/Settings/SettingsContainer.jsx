import {connect} from "react-redux";
import Settings from "./Settings";
// import {changeNoserverMode} from "../../redux/reducers/settingsReducer";
import {
    setDeveloperShow,
    switchDeveloperShow,
    switchDeveloperShowLoaded,
    // switchNoServerMode,
    switchUseV4
} from "../../redux/reducers/lampReducer";

const mapStateToProps = (state) => {
    return {
        // lampSetting: {
        //     useV4: state.lamp.lampData.useV4
        // }
        useV4: state.lamp.lampData.useV4,
        noServerMode: state.lamp.noServerMode,
        developerSettings: {
            showLampDeveloperSettings: state.lamp.showDeveloperSettings,
            showLampDeveloperSettingsLoaded: state.lamp.showDeveloperSettingsLoaded,


        },
        blynkSettings: state.lamp.blynkSettings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeV4toV1: () => {
            dispatch(switchUseV4())
        },
        // switchLampNoserverMode: () => {
        //     dispatch(switchNoServerMode())
        // },
        switchLampDeveloperShow: () => {
            // debugger;
            dispatch(switchDeveloperShow())
        },
        switchDeveloperShowLoaded: (value) => {
            // debugger
            dispatch(switchDeveloperShowLoaded(value))
        },
        setDeveloperShow: (value) => {
            dispatch(setDeveloperShow(value))
        }

    }
}

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)

export default SettingsContainer