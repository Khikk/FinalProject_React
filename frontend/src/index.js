import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/index';


export const base_url = 'http://localhost:3333'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <Router>
        <App/>
    </Router>
</Provider>
)