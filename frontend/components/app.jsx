import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import GreetingContainer from './greeting/greeting_container';
// Can add greeting container back in later as nav bar
import HomeContainer from './home/home_container';

const App = () => (
  <div className="main-app">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <ProtectedRoute path="/home" component={HomeContainer}/>
      <ProtectedRoute exact path="/" component={SessionFormContainer} />
    </Switch>
  </div>
);

export default App;
