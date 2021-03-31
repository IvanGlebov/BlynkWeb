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
                        <DarkBlueMaterialSwitch checked={this.props.useMode} onChange={this.props.switchState} />
                    </div>


                </div>
                <div className={s.timeInputWrapper}>
                    <div className={s.timeInputHeader}>On time</div>
                    <input className={s.timePicker} type="time" onChange={this.props.setOnTime.bind(this)} value={this.props.onTime} />
                </div>
                <div className={s.timeInputWrapper}>
                    <div className={s.timeInputHeader}>Off time</div>
                    <input className={s.timePicker} type="time" onChange={this.props.setOffTime.bind(this)} value={this.props.offTime} />
                </div>
                {/*<div className={}></div>*/}
            </div>

        )
    }
}

export default OnOffSettings

