import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util.jsx'
import GreetingContainer from './greeting/greeting_container';
// Can add greeting container back in later as nav bar

const App = () => (
  <div className="main-app">
    <header>
      <h1>Nightscapes</h1>
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />

  </div>
);

export default App;
