import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx'
import HomeContainer from './home/home_container';
import UserPageContainer from './user_page/user_page_container';
import PhotoUploadFormContainer from './photo_upload_form/photo_upload_form_container';
import PhotoDetailContainer from './photo_detail/photo_detail_container';

const App = () => (
  <div className="main-app">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      // <ProtectedRoute path="/home" component={HomeContainer}/>
      <ProtectedRoute path="/users/:userId" component={HomeContainer}/>
      <ProtectedRoute path="/photos/:photoId" component={HomeContainer}/>
      <ProtectedRoute path="/upload" component={HomeContainer}/>
      <ProtectedRoute path="/" component={HomeContainer} />
    </Switch>
  </div>
);

export default App;
