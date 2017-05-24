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
      </div>
    )
  }
}

export default FeedSidebar;
