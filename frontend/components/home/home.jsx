import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import FeedContainer from '../feed/feed_container';
import UserPageContainer from '../user_page/user_page_container';
import PhotoUploadFormContainer from '../photo_upload_form/photo_upload_form_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  // refactor this into switch statement
  render(){
      if (this.props.location.pathname.slice(1).includes('users')) {
        return (
          <div className="homepage">
            <NavbarContainer />
            <UserPageContainer />
          </div>
        )
      } else if (this.props.location.pathname.slice(1) === "upload") {
        return (
          <div className="homepage">
            <NavbarContainer/>
            <PhotoUploadFormContainer />
          </div>
        )
      } else {
        return (
          <div className="homepage">
            <NavbarContainer />
            <FeedContainer/>
          </div>
        )
      }
    }
  }
export default Home;
