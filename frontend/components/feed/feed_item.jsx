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
    backgroundColor   : 'rgba(0, 0, 0, 0.85)',
    display           : 'flex',
    alignItems       : 'center',
    justifyContent   : 'center'
  },
  content : {
    position                   : 'initial',
    top                        : '150px',
    left                       : '150px',
    right                      : '150px',
    bottom                     : '150px',
    border                     : '1px solid grey',
    background                 : 'black',
    overflow                   : 'none',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    width                      : '60%',
    boxShadow                 : 'white 10px 10px 20px 0px'

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
    let {id, img_url, title, description} = this.props.photo;
    return (
      <li className="feed-item">
        <img src={img_url} alt={title} onClick={this.onOpenModal}/>

        <Modal isOpen={open}
          onRequestClose={this.onCloseModal}
          contentLabel="Modal"
          style={my_custom_style}>

          <PhotoDetailContainer
            photo={this.props.photo}
            className="modal-picture"
            />
        </Modal>

        <div>
          <h2 className="feed-item-title">{title}</h2>
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
