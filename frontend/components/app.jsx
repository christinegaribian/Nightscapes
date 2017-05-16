import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import GreetingContainer from './greeting/greeting_container';
// Can add greeting container back in later as nav bar
import Feed from './home/feed';

const App = () => (
  <div className="main-app">
    <ProtectedRoute path="/" component={Feed}/>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
