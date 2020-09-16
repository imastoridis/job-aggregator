/*Imports*/
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
//Containers
import Homepage from './Components/Homepage'
import ResultsPage from './Components/ResultsPage'


function App() {
  
  return (
    <div>
        <Router>
          <Switch>
             <Route path='/' component={Homepage} />
             <Route path='/search' component={ResultsPage} />
          </Switch>
        </Router>
    </div>
  )
}

export default App;
