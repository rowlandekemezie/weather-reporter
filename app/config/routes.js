import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';
import Home from '../containers/Home';
import Header from '../containers/Header';
import Forcast from '../containers/Forcast';
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forcast/:city" header="The forcast route" component={Forcast} />
    </Route>
  </Router>
);

export default routes;
