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
    this.onImageDrop = this.onImageDrop.bind(this);
    this.upload = this.upload.bind(this);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      uploadedFile: null
    };
  }

  upload(file){
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
        this.props.history.push('/home');
      }
    });
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.upload(files[0]);
  }


  render(){
    return (
      <form>
      <div className="FileUpload">
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop}>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>
      </div>

      <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
          <p>{this.state.uploadedFile.name}</p>
          <img src={this.state.uploadedFileCloudinaryUrl} />
        </div>}
      </div>
    </form>
    )
  }
}
export default PhotoUploadForm;
