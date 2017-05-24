import React from 'react';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  render(){
    return (
      <div >
      FORM THIS IS IT

      1) UPLOAD NEW PROF PIC
      2) EDIT BIO (ALREADY FILLED)
      3) SAVE BUTTON
      </div>
    )
  }
}

export default EditProfileForm;
