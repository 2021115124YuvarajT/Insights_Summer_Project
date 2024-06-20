import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/App/App"
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const rootElem = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  rootElem
)


