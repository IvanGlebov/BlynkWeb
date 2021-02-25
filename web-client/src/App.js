import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DashboardContainer from "./components/Dashboard/DashboardContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";

function App() {
    return (
        <div className='appWrapper'>
            <NavbarContainer/>
            <div className='appWrapperContent'>
                <Route path='/dashboard' render={() => <DashboardContainer />}/>
                <Route path='/settings' render={() => <SettingsContainer />}/>
            </div>
        </div>
    );
}

export default App;
