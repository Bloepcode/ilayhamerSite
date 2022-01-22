import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Intro from './screens/Intro';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-pink-400 to-orange-600 w-full flex">
      <Intro />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
