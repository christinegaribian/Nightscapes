import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'iyrokfbk';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dl091hw7z/upload';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.upload = this.upload.bind(this);
    // this.handleImageDrop = this.handleImageDrop.bind(this);
    // this.handleImageDrop = this.handleImageDrop.bind(this);
    this.state = {
      bio: "",
      img_url: ""
    }
  }

  componentDidMount(){
    this.setState({
      id: this.props.targetUser.id,
      user_img_url: this.props.targetUser.user_img_url
    })
  }


  handleSubmit(e){
    e.preventDefault();
    let uploadScope = this;
    this.props.updateUser(this.state).then(() => {
      uploadScope.props.closeModal();
    })
    //
    // setTimeout(() => {
    //
    //   this.props.closeModal();
    // }, 5000)
  }


  upload(files){
    // files.preventDefault();
    let file = files[0];

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);
    let uploadscope = this;
    upload.end((err, response) => {
      if (response.body.secure_url !== '' && !err){
        this.props.updateUser({
          id: uploadscope.props.targetUser.id,
          user_img_url: response.body.secure_url
        }).then(
          () => {
            uploadscope.props.closeModal();
          });
        }
      });
    }
    // this.props.closeModal();

    update(field) {
      return e => this.setState({
        [field]: e.currentTarget.value
      });
    }
    // onSubmit={this.handleSubmit}
    render(){
      let currentUser = this.props.currentUser;

      return (
        <section className="edit-profile-container">
          <form className="edit-profile" >
            <div className="bio-container">
              <h1>Bio:</h1>
              <br/>
              <input type="text"
                placeholder="Bio"
                value={this.state.bio}
                onChange={this.update('bio')}
                ></input>
            </div>

            <div className="edit-profile-buttons">
              <div className="profile-button-container">
                <Dropzone className="file-drop"
                  multiple={false}
                  accept="image/*"
                  onDrop={this.upload}>
                  <button
                    className="change-profile-button"
                    >
                    Upload Profile Picture
                  </button>
                </Dropzone>
              </div>
              <input type="submit"
                     value="Save"
                     id="edit-profile-submit"
                     onClick={this.handleSubmit}/>
            </div>
          </form>
        </section>

      )
    }
  }

  // handleImageDrop(files) {
  //   this.setState({
  //     uploadedFile: files[0]
  //   });
  // }


  //
  // <div >
  // FORM THIS IS IT
  //
  // 1) UPLOAD NEW PROF PIC
  // 2) EDIT BIO (ALREADY FILLED)
  // 3) SAVE BUTTON
  // </div>

  export default EditProfileForm;
