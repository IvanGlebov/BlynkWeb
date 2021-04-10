import React from 'react'
import s from './DataTransfer.module.css'
import DarkBlueMaterialSwitch from "../../../MaterialUiCustomComponents/DarkBlueMaterialSwitch";
import axios from "axios";
class DataTransfer extends React.Component {

    componentDidMount() {
        axios
            .get(this.props.blynkSettings.serverIp
                + this.props.blynkSettings.lampKey
                + "/get/"
                + this.props.blynkSettings.pins.useV4
                // + (this.props.useV4 === true ? "0" : "1")
            )
            .then(response => {
                // debugger
                console.log(response.data)
                this.props.setV4(response.data)
            })
    }

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