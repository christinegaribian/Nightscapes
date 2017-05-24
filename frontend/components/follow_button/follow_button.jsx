import React from 'react';

class FollowButton extends React.Component {
  constructor(props){
    super(props);

    this.state = { followerIds: [] }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
  }

  componentWillReceiveProps(newProps){
    if (!!newProps.targetUser.id) {
      const followerIds = newProps.targetUser.followers.map(
        (follower) => follower.id
      );
      this.setState({followerIds});
    }
  }

  toggleFollow(){
    if (this.state.followerIds.includes(this.props.currentUserId)){
      this.props.unfollowUser(this.props.targetUser.id);
    } else {
      this.props.followUser(this.props.targetUser.id);
    }
  }

  followButton(){
    if (this.props.targetUser.id){
      if (this.props.currentUserId !== this.props.targetUser.id){
        if (this.state.followerIds.includes(this.props.currentUserId)){
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
  }

  render(){
    return (
      <div className="ButtonContainer">
        {this.followButton()}
      </div>
    );
  }
}

export default FollowButton;
