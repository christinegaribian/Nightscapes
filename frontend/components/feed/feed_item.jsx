import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import PhotoDetailContainer from '../photo_detail/photo_detail_container';
const my_custom_style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    height            : '100%',
    width             : '100%',
    backgroundColor   : 'rgba(10, 10, 15, 0.8)',
    display           : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center',
    padding            : '0',
    zIndex                     : '1'
  },
  content : {
    outline : 'none',
    position                   : 'absolute',
    fontFamily                 : '"Julius Sans One", sans-serif',
    left                       : '80px',
    right                      : '80px',
    top : '',
    bottom : '',
    border                     : 'none',
    background                 : 'black',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch'
  }
}

class FeedItem extends React.Component {
  constructor(props){
    super(props);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
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



  render(){
    const { open } = this.state;
    let {id, img_url, title, description, user} = this.props.photo;
    let user_url;
    if (!!user) {
      user_url = `/users/${user.id}`;
    } else {
      user_url = "";
    }
    return (
      <li className="feed-item">
        <img src={img_url}
          className="main-image"
          alt={title}
          onClick={this.onOpenModal}
          />

        <Modal isOpen={open}
          className="photo-show-modal"
          onRequestClose={this.onCloseModal}
          contentLabel="Modal"
          style={my_custom_style}>

          <PhotoDetailContainer
            photo={this.props.photo}
            className="modal-picture"
            />
        </Modal>

        <div>
          <div className="feed-item-header">
            <h2 className="feed-item-title">{title}</h2>
            <Link to={user_url} className="feed-item-user">
              <h3>{user.username}</h3>
              <img src={user.img_url}></img>
            </Link>
          </div>

          <h3 className="feed-item-description">{description}</h3>
        </div>
      </li>
    );
  }
};


//   <Link to={`/photos/${id}`} onClick={this.onOpenModal}>
//   <img src={img_url} alt={title}/>
// </Link>

export default FeedItem;
