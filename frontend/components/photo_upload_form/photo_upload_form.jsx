import React from 'react';

class PhotoUploadForm extends React.Component {
  constructor(){

  }

  upload(e){
    e.preventDefault();
    coudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {

        }
      }
    )
  }

  render(){
    return (
      <button onClick={this.upload}>Upload Image</button>
    )
  }
}
export default PhotoUploadForm;
