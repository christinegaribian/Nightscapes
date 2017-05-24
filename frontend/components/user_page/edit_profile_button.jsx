import React from 'react';
import Modal from 'react-modal';
import EditProfileForm from './edit_profile_form';
const my_custom_style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    height            : '100%',
    width             : '100%',
    backgroundColor   : 'rgba(216,216,216, 0.1)',
    display           : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center',
    padding            : '0',
    zIndex                     : '1'
  },
  content : {
    position                   : 'absolute',
    fontFamily                 : '"Julius Sans One", sans-serif',
    top                        : '30%',
    left                       : '30%',
    right                      : '30%',
    bottom                     : '30%',
    border                     : '1px solid grey',
    background                 : 'black',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '20px',
    outline                    : 'none',
    padding                    : '20px'
  },
  'content:hover' : {
    cursor : 'pointer'
  }
}


class EditProfileButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.editButton = this.editButton.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }


  componentWillMount(){
    Modal.setAppElement('body')
  }



  editButton(){
    if (this.props.currentUser.id === this.props.targetUser.id){
        return (
          <button className="edit-profile-button" onClick={this.onOpenModal}>Edit Profile</button>
        );
      }
  }

  render(){
    const { open } = this.state;

    return (
      <div className="ButtonContainer">
        {this.editButton()}

        <Modal isOpen={open}
          className="profile-edit-modal"
          onRequestClose={this.onCloseModal}
          contentLabel="Modal"
          style={my_custom_style}>

          <EditProfileForm
            targetUser={this.props.targetUser}
            className="modal-edit-form"
            />
        </Modal>
      </div>
    )
  }
}

export default EditProfileButton;
