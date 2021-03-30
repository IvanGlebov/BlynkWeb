import {connect} from "react-redux";

import DataTransfer from "./DataTransfer";
import {switchUseV4} from "../../../../redux/reducers/lampReducer";

let mapStateToProps = (state) => {
    // debugger;
    return {
        useV4: state.lamp.lampData.useV4
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        switchV4: () => {
            dispatch(switchUseV4())
        }
    }
}

const DataTransferContainer = connect(mapStateToProps, mapDispatchToProps)(DataTransfer)

export default DataTransferContainer