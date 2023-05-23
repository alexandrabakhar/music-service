import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './components/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'));

wrapper.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
            {/* <Container pageType='mainPage'/> */}
            {/* <MainPage /> */}
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
