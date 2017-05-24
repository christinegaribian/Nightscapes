import React from 'react';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.editProfile = this.editProfile.bind(this);
    this.update = this.update.bind(this);

    this.state = {
      user_img_url: "",
      bio: ""
    }
  }

  editProfile(){
    e.preventDefault();
    
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    debugger
    return (
      <section className="edit-profile-container">
        <form className="edit-profile" onSubmit={this.editProfile}>
          <div className="file-upload">

          </div>

          <div>
            <h1>Bio:</h1>
            <br/>

            <input type="text"
              placeholder="Bio"
              value={this.props.targetUser.bio}
              onChange={this.update('title')}
              ></input>
            <br/>
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
