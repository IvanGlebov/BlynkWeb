import React from 'react'
import s from './Settings.module.css'
import DarkBlueMaterialSwitch from "../MaterialUiCustomComponents/DarkBlueMaterialSwitch";
import axios from "axios";

class Settings extends React.Component {
    // const serverRequest_p1 = this.props.blynkSettings.serverIp + this.props.blynkSettings.lampKey
    componentDidMount() {
        // console.log("Settings loaded prop to false")
        // this.props.switchDeveloperShowLoaded(false)
        axios
            .get(this.props.blynkSettings.serverIp
                + this.props.blynkSettings.lampKey
                + "/get/"
                + this.props.blynkSettings.pins.lampSettings)
            .then(response => {
                this.props.switchDeveloperShowLoaded(true)

                this.props.setDeveloperShow(response.data)

            })
    }

    render() {
        return (
            <div className={s.contentWrapper}>
                <div className={s.mainHeader}>SETTINGS
                    {this.props.developerSettings.showLampDeveloperSettingsLoaded === true ? <div>"Loaded"</div> :
                        <div>"Loading in progress"</div>}
                    {/*{ this.props.showDeveloperSettingsLoaded }*/}
                </div>
                <div className={s.optionsWrapper}>
                    <div className={s.commonOptions}>
                        <div className={s.sectionHeader}>Common options</div>
                        <div className={s.options}>

                        </div>
                    </div>
                    <div className={s.developerOptions}>
                        <div className={s.sectionHeader}>Developer settings</div>
                        <div className={s.lampOptions}>
                            <div className={s.subSectionHeader}>
                                <div className={s.optionText}>Lamp settings</div>
                                <div className={s.controlElement}>
                                    <DarkBlueMaterialSwitch onChange={this.props.switchLampDeveloperShow}
                                                            checked={this.props.developerSettings.showLampDeveloperSettings}/>
                                </div>

                            </div>

                            <div
                                className={this.props.developerSettings.showLampDeveloperSettings === true ? s.optionsUnfolded : s.optionsFolded}>
                                <div className={s.option}>
                                    <div className={s.optionText}>Use NoServer mode</div>
                                    <div className={s.controlElement}>
                                        <DarkBlueMaterialSwitch onChange={this.props.switchLampNoserverMode}
                                                                checked={this.props.noServerMode}/>
                                    </div>

                                </div>
                                <div className={s.option}>
                                    <div className={s.optionText}>Use pin V4 instead of V1</div>
                                    <div className={s.controlElement}>
                                        <DarkBlueMaterialSwitch onChange={this.props.changeV4toV1}
                                                                checked={this.props.useV4}/>
                                    </div>

                                </div>
                                <div className={s.option}>
                                    <div className={s.optionText}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings