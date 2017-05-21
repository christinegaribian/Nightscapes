import React from 'react';
// import {Link} from 'react-router-dom';
import UserHeader from './user_header';

class UserPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestTargetUser(this.props.match.params.userId);
  }

  render(){
    let currentUser = this.props.currentUser;
    return (
      <div className="user-page">
        <div className="user-page-header">
          <UserHeader
            targetUser={this.props.targetUser}
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
