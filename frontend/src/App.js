import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Header from './Home/Header';
import Login from './Admin/Login';

function App() {
  return (
    <Router>
      <div className="container">
        <main>
          <Switch>
              <Route path="/" exact component={Header} />
              <Route path="/login" exact component={Login} />
          </Switch>
        </main>
    </div>
    </Router>
  );
  }


export default App;
