// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
// import { Link } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Route path="/navbar" component={Navbar} />
        <Main />
        {/* <Route path="/tutorial" component={Tutorial} /> */}
      </div>
    </Router>
  );

}

export default App;
