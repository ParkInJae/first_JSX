import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './chapter_03/Library'; // import를 사용해서 Library 컴포넌트를 가져옴 
import Kimchan from './Kim/Kimchan';

//우리가 만든 컴포넌트를 실제로 화면에 렌더링 하기 위해서  Library 컴포넌트를 가져온 뒤 
// ReactDOM을 사용해 rootDOM node에 렌더링 하도록 수정 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Library />
    <hr/>
    <Kimchan />
  </React.StrictMode>
);

reportWebVitals();
