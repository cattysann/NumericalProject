import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Home from './Home';
import CS from './CS';
import Graphical from './RootofEq/Graphical';
import Bisection from './RootofEq/Bisection';
import FalseP from './RootofEq/FalseP';
import Navigation from './Navigation';
import OneP from './RootofEq/OneP';
import Secant from './RootofEq/Secant';
import Newt from './RootofEq/NewtonRap';

import Cramer from './LinearAl/Cramer';

import CompoTrap from './IntegrateTech/ComposTrap';
import CompoSim from './IntegrateTech/ComposSim';

import Forwardh from './Difference/forwardh';
import Forwardh2 from './Difference/forwardh2';
import Backwardh from './Difference/backwardh';
import Backwardh2 from './Difference/backwardh2';
import Centralh from './Difference/centralh';
import Centralh2 from './Difference/centralh2';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Navigation />

    

    <Route exact path="/" component={Home} />
    <Route path='/CS' component={CS} />
    <Route path="/RootofEq/Graphical" component={Graphical} />
    <Route path="/RootofEq/Bisection" component={Bisection} />
    <Route path="/RootofEq/FalseP" component={FalseP} />
    <Route path="/RootofEq/OneP" component={OneP} />
    <Route path="/RootofEq/Newt" component={Newt} />
    <Route path="/RootofEq/Secant" component={Secant} />

    <Route path="/LinearAl/Cramer" component={Cramer}/>

    <Route path="/IntegrateTech/ComposTrap" component={CompoTrap}/>
    <Route path="/IntegrateTech/ComposSim" component={CompoSim}/>

    <Route path="/Difference/forwardh" component={Forwardh} />
    <Route path="/Difference/forwardh2" component={Forwardh2} />
    <Route path="/Difference/backwardh" component={Backwardh} />
    <Route path="/Difference/backwardh2" component={Backwardh2} />
    <Route path="/Difference/Centralh" component={Centralh} />
    <Route path="/Difference/Centralh2" component={Centralh2} />

  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
