import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Redirect } from 'react-router'

const CLOUDINARY_UPLOAD_PRESET = 'iyrokfbk';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dl091hw7z/upload';
// later change these to private


//can remove thumbnail, because it's going to redirect to main feed instead
class PhotoUploadForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      uploadedFile: null,
      title: "",
      description: ""
    };

    this.handleImageDrop = this.handleImageDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.update = this.update.bind(this);
  }

  upload(e){
    e.preventDefault();

    let file = this.state.uploadedFile;
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                  .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                  .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        this.props.postPhoto({
                    img_url: this.state.uploadedFileCloudinaryUrl,
                    title: this.state.title,
                    description: this.state.description
                  }
              );
        // Add the other parameters in here too
        this.props.history.push('/home');
      }
    });
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
      <form className="PhotoUpload" onSubmit={this.upload}>
        <div className="FileUpload">
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.handleImageDrop}>
            <p>Drop an image or click to select a file.</p>
          </Dropzone>
        </div>

        <div className="InfoUpload">
          <h1>Upload A Photo</h1>
          <input type="text"
                 placeholder="Title"
                 value={this.state.title}
                 onChange={this.update('title')}
                 ></input>
          <textarea placeholder="Description"
                  value={this.state.description}
                  onChange={this.update('description')}
                  ></textarea>
                <input type="submit" value="Upload" />
        </div>
      </form>
    )
  }
}
export default PhotoUploadForm;
