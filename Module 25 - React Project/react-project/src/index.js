import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import LoginForm from './components/forms/LoginForm';
import QuotesWrapper from './components/quotes/QuotesWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/quotes' element={<QuotesWrapper/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>
    
);