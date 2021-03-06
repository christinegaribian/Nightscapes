import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
import PhotoUploadFormContainer from '../photo_upload_form/photo_upload_form_container';


const my_custom_style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)',
    display           : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center'
  },
  content : {
    position                   : 'absolute',
    top                        : '150px',
    left                       : '150px',
    right                      : '150px',
    bottom                     : 'none',
    border                     : 'none',
    background                 : 'none',
    overflow                   : 'none',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  },
  'content:hover' : {
    cursor : 'pointer'
  }
}



class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
    this.state = {
      open: false,
    };

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

  componentDidMount (){
    window.scrollTo(0, 0)
  }

  handleLogoClick(){
    if (this.props.location.pathname === "/"){
      window.scrollTo(0, 0);
    } else {
      this.props.history.push("/");
    }
  }

  render(){
    let currentUser = this.props.currentUser;
    const { open } = this.state;

    return (
      <nav className="navbar">
        <div className="left" onClick={this.handleLogoClick}>
          <img className="logo"
            alt="Nightscapes logo"
            src="https://res.cloudinary.com/dl091hw7z/image/upload/v1495504658/apxpfouv5ikgzfk94ljf.png"
            />
          <p >NIGHTSCAPES</p>
        </div>

        <div className="right">
          <Link to={'/discover'}   title="New Photos"> Discover </Link>

          <Link to={`/users/${currentUser.id}`}>
            <img src={currentUser.user_img_url}
              className="user-img-url"
              title="Profile Page"/>
            <h1   title="Profile Page">{currentUser.username}</h1>
          </Link>

          <i className="fa fa-cloud-upload"
            aria-hidden="true"
            id="upload-icon"
            title="Upload Image"
            onClick={this.onOpenModal}
            ></i>
          <Modal isOpen={open}
            onRequestClose={this.onCloseModal}
            contentLabel="Modal"
            style={my_custom_style}>
            <PhotoUploadFormContainer
              currentUser={currentUser}
              closeModal={this.onCloseModal}
              />
          </Modal>

          <i className="fa fa-sign-out"
            aria-hidden="true"
            onClick={this.props.logout}
            title="Log Out"
            id="logout-icon"
            ></i>
        </div>
      </nav>
    )
  }
}

export default Navbar;
