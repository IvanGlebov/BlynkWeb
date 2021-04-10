import {connect} from "react-redux";

import DataTransfer from "./DataTransfer";
import {setUseV4, switchUseV4} from "../../../../redux/reducers/lampReducer";

let mapStateToProps = (state) => {
    // debugger;
    return {
        useV4: state.lamp.lampData.useV4,
        blynkSettings: state.lamp.blynkSettings
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchV4: () => {
            dispatch(switchUseV4())
        },
        setV4: (value) => {
            dispatch(setUseV4(value))
        }
    }
}

const DataTransferContainer = connect(mapStateToProps, mapDispatchToProps)(DataTransfer)

export default DataTransferContainer