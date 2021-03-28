import s from './Dashboard.module.css'
import React from 'react'
import LampContainer from "./Lamp/LampContainer";

class Dashboard extends React.Component {

    render() {
        return (
            <div>
                {/*DASHBOARD content*/}
                <div className={s.components}>
                    <div className={s.component}><LampContainer/></div>
                    <div className={s.component}>Bedroom component</div>
                    <div className={s.component}>Server status</div>
                    <div className={s.component}>New block</div>
                    <div className={s.component}>Add new +</div>
                </div>

            </div>
        )
    }
}

export default Dashboard