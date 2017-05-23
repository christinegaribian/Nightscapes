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
    backgroundColor   : 'rgba(0, 0, 0, 0.85)',
    display           : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center',
    padding            : '10px'
  },
  content : {
    position                   : 'relative',
    fontFamily                 : '"Julius Sans One", sans-serif',
    top                        : '0',
    left                       : '0',
    right                      : '0',
    bottom                     : '0',
    border                     : '1px solid grey',
    background                 : 'black',
    overflow                   : 'none',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '20px',
    outline                    : 'none',
    padding                    : '40px',
    marginBottom              : '0px',
    marginTop                  : '50px',
    boxShadow                  : 'rgba(169, 169, 169, 0.37) 5px 5px 5px 0px',
    opacity                    : '100',
    width                      : '80vh'
  },
  'content:hover' : {
    cursor : 'pointer'
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
            <Link to={user_url}>
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
