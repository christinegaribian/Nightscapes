import React from 'react';
import FollowButtonContainer from '../follow_button/follow_button_container';
// import { hashHistory } 0from 'react-router';
// import FollowBoxItemImage from './follow_box_item_image';
import { Link } from 'react-router-dom';

class FollowBoxItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserFollowClick = this.handleUserFollowClick.bind(this);
  }

  handleUserFollowClick(e) {
    hashHistory.push('/user/'+this.props.user.id);
  }

  render() {
    let {
      username,
      id,
      user_img_url,
      photo_count
    } = this.props.user;

    // let images = samples.map((image) => (
    //   <li key={image.id} className="follow-item-image">
    //     <FollowBoxItemImage details={image} key={image.id}/>
    //  </li>
    // ));
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
          <FollowButtonContainer currentUserId={this.props.currentUserId} targetUser={this.props.user} />
        </div>

        <div className="follow-item-lower">

        </div>
      </div>
    );
  }
}

// <ul className="follow-item-images">
//   {images}
// </ul>
export default FollowBoxItem;
