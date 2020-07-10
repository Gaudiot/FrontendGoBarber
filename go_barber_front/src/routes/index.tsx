import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
