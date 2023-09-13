import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/themes.scss';
import reportWebVitals from './components/reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/routes';
import { ThemeProvider } from './providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'));

wrapper.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <AppRoutes />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
