import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Redirect } from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'iyrokfbk';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dl091hw7z/upload';
// later change these to private


//add thumbnail
class ProfilePictureUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedFile: null
    };

    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  renderErrors() {
    if (this.props.errors[0] != null){
      alert(`Error! ${this.props.errors}`)
    }
  }
  //
  // componentWillReceiveProps(){
  //   this.renderErrors();
  // }

  upload(e){
    e.preventDefault();
    debugger
    let file = this.state.uploadedFile;
    // if (!file){
    //   alert('Please select an image to upload, or wait for your image to finish uploading.');
    //   return;
    // }
    // if (this.state.title === ""){
    //   alert('Title can\'t be blank')
    //   return;
    // }

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);

    upload.end((err, response) => {
      if (response.body.secure_url !== '' && !err){
        this.props.updateUser({
          id: {this.props.currentUser.id},
          img_url: {this.response.body.secure_url}
        });
      }
    });
    this.props.closeModal();
  }

  handleImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
  }

  render(){
    return (
      <section className="photo-upload-container">
        <form className="photo-upload" onSubmit={this.upload}>
            <Dropzone className="file-drop"
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageDrop}>
            </Dropzone>
        </form>
      </section>
    )
  }
}
export default ProfilePictureUpload;
