import './App.css';

import Nav from './Components/NavBar/index';
import Footer from './Components/Footer/index';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/AboutMe';
import TextEditor from './Components/Pages/TextEditor';
import { BrowserRouter, Routes, Route  }from "react-router-dom";


function App() {
  return (
    <>
      <Nav/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AboutMe" element={<AboutMe />}/>
            <Route path="/TextEditor" element={<TextEditor />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
