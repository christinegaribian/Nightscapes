import React from 'react';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.state = {
      bio: "",
      img_url: ""
    }
  }

  componentDidMount(){
    this.setState({
      id: this.props.targetUser.id,
      user_img_url: this.props.targetUser.user_img_url,
      bio: this.props.targetUser.bio
    })
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateUser(this.state);
    this.props.closeModal();
  }

  handleImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    return (
      <section className="edit-profile-container">
        <form className="edit-profile" onSubmit={this.handleSubmit}>
          <div className="bio-container">
            <h1>Bio:</h1>
            <br/>
            <input type="text"
              placeholder="Bio"
              value={this.state.bio}
              onChange={this.update('bio')}
              ></input>
          </div>


          <div className="profile-button-container">
            <button className="change-profile-button">Change Profile Picture</button>
            <input type="submit" value="Save" />
          </div>
        </form>
      </section>

    )
  }
}



//
// <div >
// FORM THIS IS IT
//
// 1) UPLOAD NEW PROF PIC
// 2) EDIT BIO (ALREADY FILLED)
// 3) SAVE BUTTON
// </div>

export default EditProfileForm;
