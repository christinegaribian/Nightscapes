import React from 'react';
// import {idsSelector} from '../../util/selectors';

class FollowBoxFollowButton extends React.Component {
  constructor(props){
    super(props);

    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  toggleFollow(){
    if (this.props.followerIds.includes(this.props.currentUserId)){
      this.props.unfollowUser(this.props.targetUser.id);
    } else {
      this.props.followUser(this.props.targetUser.id);
    }
  }

  followButton(){
    if (this.props.targetUser.id){
      if (this.props.targetUser.id != this.props.currentUserId)
      if (this.props.followerIds.includes(this.props.currentUserId)){
        return (
          <button id="unfollow" className="follow-button unfollow" onClick={this.toggleFollow}>Unfollow</button>
        );
      } else {
        return (
          <button id="follow" className="follow-button follow" onClick={this.toggleFollow}>Follow</button>
        );
      }
    }
  }

  render(){
    return (
      <div className="ButtonContainer">
        {this.followButton()}
      </div>
    );
  }
}

export default FollowBoxFollowButton;
