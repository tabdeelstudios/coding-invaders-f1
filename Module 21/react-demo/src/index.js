import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Navbar from './Navbar';
// import FAQ from './FAQ';
// import Services from './Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Navbar />
    <FAQ /> */}
    {/* <Services /> */}
    <Counter/>
  </React.StrictMode>
);