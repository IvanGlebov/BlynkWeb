import React from 'react'
import s from './OnOffSettings.module.css'
import DarkBlueMaterialSwitch from "../../../MaterialUiCustomComponents/DarkBlueMaterialSwitch";



class OnOffSettings extends React.Component{

    render(){
        return (
            <div className={s.contentWrapper}>
                {/*<div>OnOffSettings</div>*/}
                <div className={s.useTimeWrapper}>
                    <div className={s.text}>Turn on/off using time</div>
                    <div className={s.TimeOffSwitchWrapper}>
                        <DarkBlueMaterialSwitch />
                    </div>


                </div>
                <div className={s.timeInputWrapper}>
                    <div className={s.timeInputHeader}>On time</div>
                    <input className={s.timePicker} type="time"/>
                </div>
                <div className={s.timeInputWrapper}>
                    <div className={s.timeInputHeader}>Off time</div>
                    <input className={s.timePicker} type="time" />
                </div>

            </div>

        )
    }
}

export default OnOffSettings

