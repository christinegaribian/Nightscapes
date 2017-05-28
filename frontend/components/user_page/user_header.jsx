import React from 'react';
import FollowButtonContainer from '../follow_button/follow_button_container';
import EditProfileButton from './edit_profile_button';

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
        <a href={user.user_site_url} target="_blank" title="Personal Site"><img className="user-header-avatar"
          src={user.user_img_url}
          /></a>
        <div className="user-header-info">
          <div className="user-header-username-follow">
            <h1>{user.username}</h1>
            <div>
              <EditProfileButton targetUser={this.props.targetUser} currentUser={this.props.currentUser}/>
              <FollowButtonContainer targetUser={this.props.targetUser}/>
            </div>
          </div>

          <ul className="user-header-stats">
            <li>{user.photo_count}<br />Photos</li>
            <li>{user.views}<br />Views</li>
            <li>{user.follower_count}<br />Followers</li>
          </ul>

          <p className="user-bio">
            {!!user.bio ? `>> ${user.bio}` : ""}
          </p>
        </div>
      </div>
    );
  }
}


export default UserHeader;
