import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Nav from './views/_Layout/NavBar';
import Footer from './views/_Layout/Footer';
import Loading from './Components/loading/index'; 
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './Store/index';

const Home = React.lazy(() => import("./views/Home/Home"));
const AboutMe = React.lazy(() => import('./views/AboutMe/AboutMe'));
const TextEditor = React.lazy(() => import('./views/TextEditor/TextEditor'));
const NotFound = React.lazy(() => import('./views/NotFound/index'));
const ArticleContent = React.lazy(() => import('./views/ArticleContent/index'));


function App() {
  const isLoading = useSelector((state: RootState) => state.Loading.isLoading);

  useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, [isLoading]);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {isLoading ? <Loading /> : null}
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Article/:id?" element={<ArticleContent />} />
        <Route path="/TextEditor" element={<TextEditor />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
