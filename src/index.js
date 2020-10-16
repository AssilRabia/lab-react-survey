import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './_index.scss';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';
let app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
