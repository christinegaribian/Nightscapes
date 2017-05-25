import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
import UserPageContainer from '../user_page/user_page_container';
import PhotoUploadFormContainer from '../photo_upload_form/photo_upload_form_container';
import { Switch, Route } from 'react-router'
import DiscoverContainer from '../discover/discover_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="homepage">
        <NavbarContainer />
        <Switch>
          <Route path='/users/:userId' component={UserPageContainer}/>
          <Route path='/discover' component={DiscoverContainer}/>
          <Route exact path='/' component={FeedContainer}/>
        </Switch>
        <Route exact path='/upload' component={PhotoUploadFormContainer}/>
      </div>
    )
    }
  }

export default Home;
