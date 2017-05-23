import React from 'react';
// import {Link} from 'react-router-dom';
import UserHeaderContainer from './user_header_container';
import UserHeader from './user_header';
import PhotoCollectionContainer from './photo_collection_container';
import PhotoCollection from './photo_collection';

class UserPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let targetUserId = this.props.match.params.userId;
    this.props.requestTargetUser(targetUserId);
    this.props.requestTargetUserPhotos(targetUserId);
    window.scrollTo(0, 0)
  }

  componentWillReceiveProps(newProps){
    const newTargetUserId = newProps.match.params.userId;
    if (this.props.match.params.userId != newTargetUserId){
      this.props.requestTargetUser(newTargetUserId);
      this.props.requestTargetUserPhotos(newTargetUserId);
    }
  }
  // this.props.history.push(`/user/${newTargetUserId}`)


  render(){
    let currentUser = this.props.currentUser;
    return (
      <div className="user-page">
        <UserHeaderContainer
          targetUser={this.props.targetUser}
          />

        <PhotoCollection
          photos={this.props.photos}
          />
      </div>
    )
  }
}

export default UserPage;
