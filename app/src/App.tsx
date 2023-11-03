import './App.css';

import Nav from './Components/NavBar/index';
import Footer from './Components/Footer/index';
import {Outlet} from 'react-router-dom';
function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
