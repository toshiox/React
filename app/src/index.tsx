import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './Components/LanguageSwitcher/i18n';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home/Home';
import AboutMe from './views/AboutMe/AboutMe';
import TextEditor from './views/TextEditor/TextEditor';
import { createBrowserRouter, RouterProvider  }from "react-router-dom";

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
    }
  ],
  }]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
