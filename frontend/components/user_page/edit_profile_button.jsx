import React from 'react';

class EditProfileButton extends React.Component {
  constructor(props) {
    super(props);

    this.editButton = this.editButton.bind(this);
  }

  editButton(){
    if (this.props.currentUser.id === this.props.targetUser.id){
        return (
          <button className="edit-profile-button" onClick={this.toggleFollow}>Edit Profile</button>
        );
      }
  }

  render(){
    return (
      <div className="ButtonContainer">
        {this.editButton()}
      </div>
    )
  }
}

export default EditProfileButton;
