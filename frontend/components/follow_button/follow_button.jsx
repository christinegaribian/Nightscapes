import React from 'react';
import {idsSelector} from '../../util/selectors';

class FollowButton extends React.Component {
  constructor(props){
    super(props);

    // this.state = { followerIds: [] }
    this.toggleFollow = this.toggleFollow.bind(this);
    this.followButton = this.followButton.bind(this);
    // this.state = {
    //   followerIds: []
    // }
  }

  // componentWillUpdate(){
  //   debugger
  // // }
  //
  // componentWillReceiveProps(newProps){
  //   if (!!newProps.currentUser.id) {
  //     const followerIds = newProps.currentUser.followees.map(
  //       (following) => following.id
  //     );
  //     this.setState({followerIds});
  //   }
  // }

  // componentWillReceiveProps(nextProps){
  //   this.setState({following: true})
  // }
  // componentWillMount(){
  //   debugger
  //   if (this.props.targetUser.followers) {
  //     this.setState({
  //       followerIds: idsSelector(this.props.targetUser.followers)
  //     })
  //   }
  // }
  //
  // componentWillReceiveProps(nextProps){
  //   debugger
  // }

  toggleFollow(){
    if (this.props.followerIds.includes(this.props.currentUserId)){
      this.props.unfollowUser(this.props.targetUser.id);
    } else {
      this.props.followUser(this.props.targetUser.id);
    }
  }

  followButton(){
    if (this.props.targetUser.id){
      debugger
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
    debugger
    return (
      <div className="ButtonContainer">
        {this.followButton()}
      </div>
    );
  }
}

export default FollowButton;
