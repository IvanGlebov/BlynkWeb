import * as React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render () {
        return(
            <div className={s.navbarClass}>
                <div className={s.nameLogo}>BLYNK CONTROL</div>
                <div className={s.links}>
                    <div className={s.link}>
                        <NavLink to='/dashboard' activeClass={s.linkActive}>DASHBOARD</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar