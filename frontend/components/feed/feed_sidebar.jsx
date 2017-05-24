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

          <p>Check out the Github</p>
          <p>Check out my LinkedIn</p>
          <p>Check out my Site</p>
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
