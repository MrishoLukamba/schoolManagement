import React from 'react';
import './css/App.css';
import Left from './Left';
import Right from './Right';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Teacher from './Teacher';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
              <Left/>
              <Right/>
          </Route>
          <Route path='/teachers'>
            <Left/>
            <Teacher/>
          </Route>
          <Route path='/students'>
             <Left/>
          </Route>
          <Route path='/about'>
             <Left/>
          </Route> 
          <Route path='/logout'>
             <Left/>
          </Route> 
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
