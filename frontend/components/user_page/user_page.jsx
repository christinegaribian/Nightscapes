import React from 'react';
// import {Link} from 'react-router-dom';
import UserHeader from './user_header';

class UserPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let currentUser = this.props.currentUser;
    debugger
    return ( 
      <div className="user-page">
        <div className="user-page-header">
          <UserHeader
            targetUserId={this.props.match.params.userId}
            requestTargetUser={this.props.requestTargetUser}
            />
        </div>

        <div className="user-page-photos">
          THESE ARE MY PHOTOS
        </div>
      </div>
    )
  }
}

export default UserPage;
