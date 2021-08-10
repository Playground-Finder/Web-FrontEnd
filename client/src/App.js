
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Main';
import Navbar from './components/PlaygroundNavbar';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );

}

export default App;
