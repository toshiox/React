import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './Components/languageSwitcher/i18n';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Store/index';

// import Home from './views/Home/Home';
const Home = React.lazy(() => import("./views/Home/Home"));
const AboutMe = React.lazy(() => import('./views/AboutMe/AboutMe'));
const TextEditor = React.lazy(() => import('./views/TextEditor/TextEditor'));
const NotFound = React.lazy(() => import('./views/NotFound/index'));


const router =  createBrowserRouter([
  {
    path:'/',
    element: <App />,
    children: [
    {
      path:'/Home',
      element: <Home />
    },
    {
      path:'/AboutMe',
      element: <AboutMe />
    },
    {
      path:'/TextEditor',
      element: <TextEditor />
    },
    {
      path:'*',
      element: <NotFound />
    }
  ],
  }]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
