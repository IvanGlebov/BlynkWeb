import React from 'react'
import {NavLink} from "react-router-dom";
import s from './LampNavbar.module.css'

class LampNavbar extends React.Component {

    render() {
        return (
            <div className={s.container}>
                <div className={s.links}>
                    {/*<NavLink to='/dashboard' className={s.link} activeClassName={s.linkActive}>Main</NavLink>*/}
                    <NavLink to='/dashboard/onOffTime' className={s.link} activeClassName={s.linkActive}>On/Off on
                        time</NavLink>
                    <NavLink to='/dashboard/onOffIfAway' className={s.link} activeClassName={s.linkActive}>On/Off if
                        away</NavLink>
                </div>
            </div>
        )
    }
}

export default LampNavbar