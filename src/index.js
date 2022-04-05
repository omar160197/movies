import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from 'react-redux';
import { store } from './store/store';


ReactDOM.render(
    
    <Provider store={store}>
    <App />
    </Provider>
    ,
  document.getElementById('root')
);   

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />)