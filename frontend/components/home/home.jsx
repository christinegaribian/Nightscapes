import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
import UserPageContainer from '../user_page/user_page_container';
import PhotoUploadFormContainer from '../photo_upload_form/photo_upload_form_container';
import PhotoDetailContainer from '../photo_detail/photo_detail_container';
import { Switch, Route } from 'react-router'

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  // refactor this into switch statement
  render(){
    return (
      <div className="homepage">
        <NavbarContainer />
        <Switch>
          <Route exact path='/' component={FeedContainer}/>
          <Route path='/users' component={UserPageContainer}/>
          <Route path='/photos/:photoId' component={PhotoDetailContainer}/>
          // <Route path='/home' component={FeedContainer}/>
        </Switch>
        <Route exact path='/upload' component={PhotoUploadFormContainer}/>
      </div>
    )
    //
    //   if (this.props.location.pathname.slice(1).includes('users')) {
    //     return (
    //       <div className="homepage">
    //         <NavbarContainer />
    //         <UserPageContainer />
    //       </div>
    //     )
    //   } else if (this.props.location.pathname.slice(1) === "upload") {
    //     return (
    //       <div className="homepage">
    //         <NavbarContainer/>
    //         <PhotoUploadFormContainer />
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <div className="homepage">
    //         <NavbarContainer />
    //         <FeedContainer/>
    //       </div>
    //     )
    //   }
    }
  }

export default Home;
