
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar1 from './components/Navbar1';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar1 />
      </div>
    </Router>
  );
  
}

export default App;
