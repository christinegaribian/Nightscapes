import React from 'react';


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
        <h1 className="user-header-username">
          {user.username}
        </h1>
        <ul className="user-header-stats">
          <li>{user.photo_count}<br />Photos</li>
          <li>{user.views}<br />Views</li>
          <li>{user.follower_count}<br />Followers</li>
        </ul>
      </div>
    );
  }
}


export default UserHeader;
