import React from 'react';
import PhotoCollectionItem from '../user_page/photo_collection_item';
import { values } from 'lodash';


class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillUnmount(){
    this.props.clearPhotos();
  }
  componentDidMount(){
    this.props.requestAllPhotos().then(() => {
      $("#gallery").justifiedGallery({
        rowHeight : 250,
        lastRow : 'justify',
        margins : 15,
        border: 150,
        captions : false
      });
    })
  }

  componentDidUpdate() {
    $("#gallery").justifiedGallery("norewind");
  }

  componentWillReceiveProps(){
    $("#gallery").justifiedGallery({
      rowHeight : 250,
      lastRow : 'justify',
      randomize: true,
      margins : 15,
      border: 150,
      captions : false
    });
  }

  render(){
    let photos = this.props.photos;
    let photoCollectionItems = []
    if (!(Object.keys(photos).length === 0 && photos.constructor === Object)) {
      photoCollectionItems = values(photos).map(photo =>
        <PhotoCollectionItem
          photo={photo}
          key={photo.created_at}
          className="grid-item"
          />
      );
    }

    return (
      <div className="gallery-container">
        <div id="gallery"
          className='image-grid'>
          {photoCollectionItems}
        </div>
        <h5 className="copyright">
          Photos courtesy of NASA's
          <a href="https://apod.nasa.gov/apod/archivepix.html">
            Astonomy Image of the Day
          </a>
        </h5>
      </div>
    );
  }
};

export default Discover;
