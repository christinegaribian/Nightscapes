import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Redirect } from 'react-router';

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

    let upload = request.post('https://api.cloudinary.com/v1_1/dl091hw7z/upload')
    .field('upload_preset', window.cloudinaryOptions.upload_preset)
    .field('file', file);

    upload.end((err, response) => {
      if (response.body.secure_url !== '' && !err){
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
