import React from 'react';
// import UserHeaderContainer from '../user_page/user_header_container';
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
          <a href="https://github.com/christinegaribian/Nightscapes" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>

          <a href="https://www.linkedin.com/in/christinegaribian/" target="_blank" >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          </a>

          <a href="#">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    )
  }
}

// // <span className="about">
//   <h1>About Nightscapes:</h1>
//   <p>Nightscapes was born from ......</p>
// </span>

export default FeedSidebar;