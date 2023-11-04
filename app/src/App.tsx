import './App.css';

import Nav from './views/_Layout/NavBar';
import Footer from './views/_Layout/Footer';
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
