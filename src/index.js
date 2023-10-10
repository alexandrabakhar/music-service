import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/themes.scss';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeProvider';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { App } from './App';


const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'));

wrapper.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
