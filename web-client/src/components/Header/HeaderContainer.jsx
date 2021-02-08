import {connect} from "react-redux";
import Header from "./Header";

const mapStateToProps = (state) => {
    return {
        headerMessage: state.header.headerMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer