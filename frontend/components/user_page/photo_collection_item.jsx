import React from 'react';
import Modal from 'react-modal';

const my_custom_style = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    height             : '100%',
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
    height                      : '70%',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '20px',
    outline                    : 'none',
    padding                    : '40px',
    marginTop                   : '50px',
    width                      : '80vh',
    boxShadow                 : 'rgba(169, 169, 169, 0.37) 5px 5px 5px 0px',
    opacity                    : '100',
    transition: 'opacity 2.5s ease'

  },
  'content:hover' : {
    cursor : 'pointer'
  }
}

class PhotoCollectionItem extends React.Component {
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
      <li className="grid-item" onClick={this.onOpenModal}>
        <img src={img_url} alt={title} />
        <p>{title}</p>
        <Modal isOpen={open}
          onRequestClose={this.onCloseModal}
          contentLabel="Modal"
          style={my_custom_style}>
          <img src={img_url} alt={title} className="grid-item-modal-image"/>
        </Modal>
      </li>
    );
  }
};

export default PhotoCollectionItem;
