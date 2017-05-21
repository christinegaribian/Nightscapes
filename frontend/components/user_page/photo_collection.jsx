import React from 'react';
import PhotoCollectionItem from './photo_collection_item';
import { values } from 'lodash';

class PhotoCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photos = this.props.photos;
    let photoCollectionItems = []
    if (!(Object.keys(photos).length === 0 && photos.constructor === Object)) {
      debugger
       photoCollectionItems = values(this.props.photos).map(photo =>
         <PhotoCollectionItem photo={photo} key={photo.created_at} />
       );
     }
    return (
      <ul className="grid" id="user-photo-collection">
       {photoCollectionItems}
      </ul>
    );


  }
}
// <li>{user.follower_count}<br />Followers</li>

// <PhotoCollectionItem photo={photo} key={photo.created_at} />


// <ul className="grid" id="user-photo-collection">
//  {photoCollectionItems}
// </ul>



export default PhotoCollection;
