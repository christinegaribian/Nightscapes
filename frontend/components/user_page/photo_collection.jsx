import React from 'react';
import PhotoCollectionItem from './photo_collection_item';
import { values } from 'lodash';
// import JustifiedLayout from 'justified-layout';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 0
};

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props);
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
      <Masonry
        className={'image-grid'}
        elementType={'ul'}
        options={masonryOptions}>
          {photoCollectionItems}
      </Masonry>
    );


  }
}
// <li>{user.follower_count}<br />Followers</li>
// aspectRatio={photo.width / photo.height}

// <JustifiedLayout className="justified-layout" containerWidth={900}>
//   {photoCollectionItems}
// </JustifiedLayout>


export default PhotoCollection;
