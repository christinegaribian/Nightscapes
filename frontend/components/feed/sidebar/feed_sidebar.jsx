import React from 'react';
import UserBox from './user_box';
import FollowBoxContainer from './follow_box_container';

class FeedSidebar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="feed-sidebar">
        <UserBox className="user-header"
          targetUser={this.props.currentUser}/>
        <FollowBoxContainer className="follow-header"
          targetUser={this.props.currentUser}/>
        <div className="personal-info">
          <a href="https://github.com/christinegaribian/Nightscapes"
            title="Github"
            target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>

          <a href="https://www.linkedin.com/in/christinegaribian/"
            target="_blank"
            title="LinkedIn" >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>

          <a href="http://www.christine.garibian.codes" title="Personal Site">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

export default FeedSidebar;
