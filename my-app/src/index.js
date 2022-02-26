import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

var navbar = document.getElementById('menu')
var m_navbar = document.getElementById('mobile-nav')
window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.style.background = 'white'
    navbar.style.boxShadow = '0.25px 0.25px 0.25px hsl(0deg 0% 0% / 0.38)'
    navbar.style.height = '85px'
    m_navbar.style.background = 'white'
    m_navbar.style.boxShadow = '0.25px 0.25px 0.25px hsl(0deg 0% 0% / 0.38)'
    m_navbar.style.height = '85px'

  } else {
    navbar.style.background = 0;
    navbar.style.boxShadow = '0 0 0 0'
    navbar.style.height = '100px'
    m_navbar.style.background = 0;
    m_navbar.style.boxShadow = '0 0 0 0'
    m_navbar.style.height = '100px'
  }
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
