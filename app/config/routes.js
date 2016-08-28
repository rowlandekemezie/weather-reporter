import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from '../containers/Main';
import Home from '../containers/Home';
import ForcastContainer from '../containers/ForcastContainer';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="forcast/:city" header="The forcast" component={ForcastContainer} />
    </Route>
  </Router>
);

export default routes;
