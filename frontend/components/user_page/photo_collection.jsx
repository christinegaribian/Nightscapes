import React from 'react';
import PhotoCollectionItem from './photo_collection_item';
import { values } from 'lodash';

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    $("#gallery").justifiedGallery("norewind");
  }

  componentDidMount(){
    $("#gallery").justifiedGallery({
      rowHeight : 300,
      lastRow : 'justify',
      margins : 9,
      cssAnimation: true,
      captions : false
    });
  }

  render() {
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
      <div id="gallery"
        className='image-grid'>
        {photoCollectionItems}
      </div>
    );
  }
}
// <li>{user.follower_count}<br />Followers</li>
// aspectRatio={photo.width / photo.height}

// <JustifiedLayout className="justified-layout" containerWidth={900}>
//   {photoCollectionItems}
// </JustifiedLayout>


export default PhotoCollection;
