import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Redirect } from 'react-router';

const CLOUDINARY_UPLOAD_PRESET = 'iyrokfbk';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dl091hw7z/upload';
// later change these to private


//add thumbnail
class PhotoUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      uploadedFile: null,
      title: "",
      description: "",
      height: "",
      width: ""
    };

    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  renderErrors() {
    debugger
    if (this.props.errors[0] != null){
      alert(`Error! ${this.props.errors}`)
    }
  }

  componentWillReceiveProps(){
    this.renderErrors();
  }

  upload(e){
    e.preventDefault();

    let file = this.state.uploadedFile;
    if (!file){
      alert('Please select an image to upload, or wait for your image to finish uploading.');
      return;
    }
    if (this.state.title === ""){
      alert('Title can\'t be blank')
      return;
    }

    let upload = request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }
      if (response.body.secure_url !== '' && !err){
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        this.props.postPhoto({
          user_id: this.props.currentUser.id,
          img_url: response.body.secure_url,
          title: this.state.title,
          description: this.state.description,
          width: response.body.width,
          height: response.body.height
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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }


  render(){
    return (
      <section className="photo-upload-container">
        <form className="photo-upload" onSubmit={this.upload}>
          <div className="file-upload">
            <Dropzone className="file-drop"
              multiple={false}
              accept="image/*"
              onDrop={this.handleImageDrop}>
              {this.state.uploadedFile === null ?
                <div className="pre-uploading">
                  <div className="upload-text">Drop an image or click to select a file.</div>
                  <i className="fa fa-camera-retro"
                    aria-hidden="true"
                    id="camera-icon"></i>
                </div>
                :
                <img className="image-thumbnail" src={this.state.uploadedFile.preview}/>
              }
            </Dropzone>
          </div>

          <div className="info-upload">
            <h1>Upload A Photo</h1>
            <br/>

            <input type="text"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update('title')}
              ></input>
            <br/>

            <textarea placeholder="Description"
              value={this.state.description}
              onChange={this.update('description')}
              ></textarea>
            <br/>
            <br/>
            <br/>

            <input type="submit" value="Upload" />
          </div>
        </form>
      </section>
    )
  }
}
export default PhotoUploadForm;
