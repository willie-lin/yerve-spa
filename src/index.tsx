import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../src/assets/styles/tailwind.css";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Admin from "../src/layouts/Admin"
import FirstComponent from "./components/FirstComponent";
import UserComponent from "./components/UserComponent";
// import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
// BrowserRouter as Router

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

  // <Router>
  //       <Routes>
  //           <Route path="/" element={<App/>} />
  //
  //           <Route path="/admin" element={<Admin/>} />
  //
  //       </Routes>
  //
  // </Router>,
    <div>
        <h1>Hello, Welcome to React and TypeScript</h1>
        <FirstComponent/>
        <UserComponent name="John" age={23} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
    </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
