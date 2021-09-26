import './App.css';
import React from 'react'
import Cse from './components/Cse';
import Ece from './components/Ece';
import Me from './components/Me';
import Bt from './components/Bt';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Header from './components/Link';

export default function App() {
  return (
    <div>
      <Router>
                <Switch>
                    <Route path="/" exact >
                    <Header />
                    </Route>
                    <Route path="/CSE" exact >
                     <Cse/>
                    </Route>
                    <Route path="/ME" exact>
                     <Me/>
                    </Route>
                    <Route path="/ECE" exact>
                     <Ece/>
                    </Route>
                    <Route path="/BT" exact>
                      <Bt/>
                    </Route>
                </Switch>
            </Router>

    </div>
  )
}



