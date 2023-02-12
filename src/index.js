import React from 'react';
//import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import store from './store/Store';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)



