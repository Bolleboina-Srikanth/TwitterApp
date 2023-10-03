import logo from './logo.svg';
import './App.css';
import FirstPage from './COMPONENTS/PAGES/UserFirstPage/Xpage';
import XSignin from './COMPONENTS/PAGES/SignIn/SignIn';
import Xsignup from './COMPONENTS/PAGES/SignUp/Xsignup';
import Router from './COMPONENTS/Router/Routing';
function App() {
  return (
    <div className="App">
    {/* <FirstPage/> */}
    {/* <XSignin/> */}
    {/* <Xsignup/> */}
    <Router/>
    </div>
  );
}

export default App;
