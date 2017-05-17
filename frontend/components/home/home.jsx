import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';
import Feed from '../feed/feed';
import UserPageContainer from '../user_page/user_page_container';
import PhotoUploadFormContainer from '../photo_upload_form/photo_upload_form_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
      if (this.props.location.pathname.slice(1).includes('users')) {
        return (
          <div className="homepage">
            <NavbarContainer session={this.props.session}/>
            <UserPageContainer state={this.state}/>
          </div>
        )
      } else if (this.props.location.pathname.slice(1) === "upload") {
        return (
          <div className="homepage">
            // pass session as props through container instead of here
            <NavbarContainer session={this.props.session}/>
            <PhotoUploadFormContainer />
          </div>
        )
      } else {
        return (
          <div className="homepage">
            <NavbarContainer session={this.props.session}/>
            <Feed/>
          </div>
        )
      }
    }
  }
export default Home;
