import React from 'react'
import s from './DataTransfer.module.css'
import DarkBlueMaterialSwitch from "../../../MaterialUiCustomComponents/DarkBlueMaterialSwitch";

class DataTransfer extends React.Component {

    render() {
        return (
            <div className={s.contentWrapper}>
                <div className={s.option}>
                    <div className={s.optionHeader}>
                        Use V4 pin instead of V1
                    </div>
                    <div className={s.optionPerformer}>

                        <DarkBlueMaterialSwitch checked={this.props.useV4} onChange={this.props.switchV4} />

                    </div>
                </div>
            </div>
        )
    }
}

export default DataTransfer