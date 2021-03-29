import React from 'react'
import s from './Settings.module.css'
import DarkBlueMaterialSwitch from "../MaterialUiCustomComponents/DarkBlueMaterialSwitch";

class Settings extends React.Component {

    render(){
        return (
            <div className={s.contentWrapper}>
                <div className={s.mainHeader}>SETTINGS</div>
                <div className={s.optionsWrapper}>
                    <div className={s.commonOptions}>
                        <div className={s.sectionHeader}>Common options</div>
                        <div className={s.options}>

                        </div>
                    </div>
                    <div className={s.developerOptions}>
                        <div className={s.sectionHeader}>Developer settings</div>
                        <div className={s.options}>
                            <div className={s.option}>
                                <div className={s.optionText}>Use NoServer mode</div>
                                <div className={s.controlElement}>
                                    <DarkBlueMaterialSwitch onChange={this.props.changeNoserverMode} value={this.props.noServerMode ? "on" : "off"} />
                                </div>

                            </div>
                            <div className={s.option}>
                                <div className={s.optionText}>Use pin V4 instead of V1</div>
                                <div className={s.controlElement}>
                                    <DarkBlueMaterialSwitch onChange={this.props.changeV4toV1} value={this.props.lampSetting.useV4insteadV1 ? "on" : "off"} />
                                </div>

                            </div>
                            <div className={s.option}>
                                <div className={s.optionText}></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Settings