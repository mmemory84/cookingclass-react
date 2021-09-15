import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Featured from './Components/Featured';
import About from './Components/About';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/" component={Contact} />
          <Route path="/" component={About} />
          <Route path="/" component={Featured} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
