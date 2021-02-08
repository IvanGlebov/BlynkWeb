import React from 'react'
import s from './Header.module.css'


class Header extends React.Component {
    // constructor(state) {
    //     super(state);
    // }
    render() {
        return (
            <div className={s.headerClass}>
                {/*Header*/}
                {this.props.headerMessage}
            </div>
        )
    }
}

export default Header

