import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library';
import Kimchan from './Kim/Kimchan';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <hr/>
    <Kimchan />
  </React.StrictMode>
);

reportWebVitals();
