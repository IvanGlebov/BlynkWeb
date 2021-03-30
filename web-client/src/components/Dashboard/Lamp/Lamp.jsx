import React from 'react'
import s from './Lamp.module.css'
import LampNavbarContainer from "./LampNavbar/LampNavbarContainer";
import {NavLink, Route} from "react-router-dom";
import axios from "axios";
import OnOffSettingsContainer from "./OnOffSetting/OnOffSettingContainer";
import DataTransferContainer from "./DataTransfer/DataTransferContainer";

class Lamp extends React.Component {

    // const firstOpen= true
    constructor() {
        super();
        this.firstOpen = false
        this.status = false
    }
    componentDidMount() {
        this.firstOpen = false
        // debugger;
        axios
            .get('https://serverblynk.iota02.keenetic.link/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/get/v1')
            .then(response => {
                if (response.data === 1){
                    // this.props.turnOn()
                    // this.props.changeLampState(1)
                    this.props.turnLampOn()
                } else {
                    this.props.turnLampOff()
                    // this.props.turnOff()
                    // this.props.changeLampState(0)
                }
                // if (response.data)
                // console.log(response.data)
            })
        // debugger;
    }

    render() {
        return (
            <div className={s.contentHolder}>
                <div className={s.itemName}>
                    <NavLink to='/dashboard' className={s.name}>Main Lamp</NavLink>
                    <div className={s.status}>Lamp is {!this.props.lampState ? 'off' : 'on'}</div>
                </div>
                <div className={s.content}>
                    <LampNavbarContainer/>
                    <div className={s.routes}>
                        <Route path='/dashboard' render={() => <div className={s.settingsHeader}>SETTINGS</div>} />
                        <Route path='/dashboard/onOffTime' render={() => <OnOffSettingsContainer />} />
                        <Route path='/dashboard/dataTransfer' render={() => <DataTransferContainer />} />
                    </div>
                </div>
                <div className={s.buttons}>
                    { !this.props.lampState
                        ?
                    <button className={s.onOffButton} onClick={this.props.turnLampOn}>ON</button>
                        :
                    <button className={s.onOffButton} onClick={this.props.turnLampOff}>OFF</button>

                    }
                </div>
                {this.props.lampState}
            </div>
        )
    }
}

export default Lamp