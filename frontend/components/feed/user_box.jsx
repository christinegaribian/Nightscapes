import React from 'react';
import { Link } from 'react-router-dom';

class UserBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let user = this.props.targetUser;
    if (this.props.targetUser === null) {
      user = {
        user_img_url: "",
        username: "",
        photo_count: "",
        views: "",
        followers: ""
      };
    }

    return (
      <div className="user-box">
        <div>
          <Link to={`users/${this.props.targetUser.id}`} className="feed-item-user">
            <div className="user-box-user">
              <img
                className="user-box-badge"
                src={user.user_img_url}
                />
              <div
                className="user-box-username"
                >{user.username}</div>
            </div>
          </Link>
        </div>
        <ul>
          <li>{user.photo_count}<br />Photos</li>
          <li>{user.follower_count}<br />Followers</li>
          <li>{user.views}<br />Views</li>
        </ul>
      </div>
    );
  }
}

export default UserBox;
