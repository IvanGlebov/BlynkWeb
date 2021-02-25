import React from 'react'
import s from './Lamp.module.css'
import LampNavbarContainer from "./LampNavbar/LampNavbarContainer";
import {Route} from "react-router-dom";
import axios from "axios";
// import {useRouteMatch} from 'react-router-dom'

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
            .get('https://192.168.1.106:9443/fsnNWpuUjlr8F-KfCGLgMPM3-xytL3Q7/get/v1')
            .then(response => {
                if (response.data === 1){
                    // this.props.turnOn()
                    this.props.changeLampState(1)
                } else {
                    // this.props.turnOff()
                    this.props.changeLampState(0)
                }
                // if (response.data)
                console.log(response.data)
            })
        // debugger;
    }

    render() {
        const date = new Date()
        // let match = useRouteMatch()

        return (
            <div className={s.contentHolder}>
                <div className={s.itemName}>
                    {/*This is Lamp*/}
                    <div className={s.name}>Main lamp</div>
                    <div className={s.status}>Lamp is {this.status === false ? 'off' : 'on'}</div>
                </div>
                <div className={s.content}>
                    <LampNavbarContainer/>
                    <div className={s.routes}>
                        <Route path='/dashboard' render={() => <div>Quick settings</div>} />
                        <Route path='/dashboard/onOffTime' render={() => <div>simple text</div>} />
                        {/*<Route path={`${match.url}/onOffTime`} render={() => <div>simple text</div>} />*/}
                    </div>
                </div>
                { !this.props.lampState
                    ? <button className={s.onOffButton} onClick={this.props.turnOn}>ON</button>
                    : <button className={s.onOffButton} onClick={this.props.turnOff}>OFF</button>
                }
            </div>
        )
    }
}

export default Lamp