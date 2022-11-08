import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/about/About'
import Home from './pages/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);