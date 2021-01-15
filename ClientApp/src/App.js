import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Footer from './components/Footer';

import Cards from './components/Cards';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          
          
          <Route path='/sign-up' component={Login} />
        </Switch>
        
        <Cards />
        <Footer />
      </Router>
    
    </>
  );
}

export default App;