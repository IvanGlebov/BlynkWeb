const CHANGE_V4 = "CHANGE_V4"
const CHANGE_NOSERVER_MODE = "CHANGE_NOSERVER_MODE"

let initialState = {
    lampSetting: {
        useV4insteadV1: true
    },
    noServerMode: false
}

const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_V4:
            return {...state, lampSetting: {useV4insteadV1: !state.lampSetting.useV4insteadV1}}
        //     break;
        case CHANGE_NOSERVER_MODE:
            debugger;
            return {...state, noServerMode: !state.noServerMode}

        default:
            return {...state, lampSetting: {...state.lampSetting}}
    }
}

export const changeUseV4insteadV1 = () => ({type: CHANGE_V4})
export const changeNoserverMode = () => ({type: CHANGE_NOSERVER_MODE})

export default settingsReducer