import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Featured from './Components/Featured';
import About from './Components/About';
import {BrowserRouter as Router, Redirect, Switch, Route, withRouter } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="/featured"  component={Featured} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
