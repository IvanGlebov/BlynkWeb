import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom"
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <div className='appWrapper'>
        {/*<HeaderContainer />*/}
        <NavbarContainer />
      {/*<div className='header'></div>*/}
      {/*<div className='navbar'>Navbar</div>*/}
      <div className='appWrapperContent'>
        content
      </div>
    </div>
  );
}

export default App;
