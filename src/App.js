import React, {Component} from 'react';
import './App.css';

import NavBar from './NavBar'
import News from './News'
import Contact from './Contact'
import About from './About'

import Logo from './Logo'
import Header from './Header'

import SearchRecipeForm from './SearchRecipeForm'

import Week from './Week.js'

import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import CalendarAndFormContainer from './CalendarAndFormContainer';




function App () {
    
    return (
      <div className="component-body">
<Logo />
    <Header/>
      {/* React Fragment allows multiple routes in Router */}
      <Router>
        <React.Fragment>
          <NavBar />
          <Route exact path="/" component={CalendarAndFormContainer} />
          <Route exact path="/news" component={News} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
        </React.Fragment>
    </Router>
    
     
    </div>
  );
  }


export default App;
