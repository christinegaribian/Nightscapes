import React from 'react';

class FollowButton extends React.Component {
  constructor(props){
    super(props);

    // this.state = { followingIds: [] }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
    // this.state = {
    //   following: false
    // }
  }

  // componentWillUpdate(){
  //   debugger
  // // }
  //
  // componentWillReceiveProps(newProps){
  //   if (!!newProps.currentUser.id) {
  //     const followingIds = newProps.currentUser.followees.map(
  //       (following) => following.id
  //     );
  //     this.setState({followingIds});
  //   }
  // }

  componentWillReceiveProps(nextProps){
    this.setState({following: true})
  }

  toggleFollow(){
    if (this.props.followingIds.includes(this.props.targetUserId)){
      this.props.unfollowUser(this.props.targetUserId);
    } else {
      this.props.followUser(this.props.targetUserId);
    }
  }

  followButton(){
    if (this.props.targetUserId){
        if (this.props.followingIds.includes(this.props.targetUserId)){
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

export default FollowButton;
