import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './Components/languageSwitcher/i18n';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home/Home';
import AboutMe from './views/AboutMe/AboutMe';
import TextEditor from './views/TextEditor/TextEditor';
import NotFound from './views/NotFound/index'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Store/index';

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
