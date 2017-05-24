import React from 'react';
import FollowButtonContainer from '../follow_button/follow_button_container';

class UserHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.targetUser;
    if (user === undefined) {
      user = [];
    }
    return (
      <div className="user-header">
        <img className="user-header-avatar"
          src={user.user_img_url}
          />
        <div className="user-header-info">
          <div className="user-header-username-follow">
            <h1>{user.username}</h1>
            <FollowButtonContainer targetUser={this.props.targetUser}/>
          </div>
          
          <ul className="user-header-stats">
            <li>{user.photo_count}<br />Photos</li>
            <li>{user.views}<br />Views</li>
            <li>{user.follower_count}<br />Followers</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default UserHeader;
