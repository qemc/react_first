import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

function App() {

  


  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/'>

          </Route>
        </Switch>
    </Router>
  );
}

export default App;
