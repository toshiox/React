import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './views/Home/Home'; 
import Nav from './views/_Layout/NavBar';
import Footer from './views/_Layout/Footer';
import AboutMe from './views/AboutMe/AboutMe';
import TextEditor from './views/TextEditor/TextEditor';
import NotFound from './views/NotFound/index'; 
import Loading from './Components/loading/index'; 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './Store/index';

function App() {
  const isLoading = useSelector((state: RootState) => state.Loading.isLoading);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  },[isLoading]);
  
  return (
    <>
      {isLoading ? <Loading /> : null}
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/TextEditor" element={<TextEditor />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
