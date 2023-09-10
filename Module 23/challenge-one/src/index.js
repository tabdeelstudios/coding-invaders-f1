import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './Container';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './Details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Container/>} />
      <Route path='/details/:title' element={<Details/>} />
    </Routes>
  </BrowserRouter>
);
