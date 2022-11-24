import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Head from './components/HeadNav';
import Bottom from './components/BottomNav';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Head />
        <BrowserRouter>
            <App />
        </BrowserRouter>
        <Bottom />
    </React.Fragment>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
