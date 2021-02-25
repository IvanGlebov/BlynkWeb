import * as React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return(
            <div className={s.navbarClass}>
                <div className={s.nameLogo}>
                    BLYNK CONTROL
                </div>
                <div className={s.links}>
                        <NavLink className={s.link} to='/dashboard' activeClassName={s.linkActive}>DASHBOARD</NavLink>
                        <NavLink className={s.link} to='/settings' activeClassName={s.linkActive}>Settings</NavLink>
                </div>
            </div>
        )
    }
}

export default Navbar