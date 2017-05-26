import React from 'react';
import FollowButtonFollowContainer from './follow_box_follow_button_container';
import { Link } from 'react-router-dom';

class FollowBoxItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      username,
      id,
      user_img_url,
      photo_count
    } = this.props.user;
    return(

      <div className="follow-box-item">
        <div className="follow-item-upper">
          <Link to={`/users/${id}`} className="follow-info-container">
            <img className="follow-item-badge" src={user_img_url} />
            <div className="follow-item-meta">
              <span className="username">{username}</span><br />
              <span className="photo-count">{photo_count} Photos</span>
            </div>
          </Link>
          <FollowButtonFollowContainer targetUser={this.props.user} />
        </div>
      </div>
    );
  }
}

export default FollowBoxItem;
