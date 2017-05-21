import React from 'react';
import PhotoCollectionItem from './photo_collection_item';
class PhotoCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let photoCollectionItems = this.props.photos.map((photo) => (
        <PhotoCollectionItem photo={photo} key={photo.created_at} />
     ));

    return (
      <ul className="grid" id="user-photo-collection">
       {photoCollectionItems}
      </ul>
    );
  }
}
// <li>{user.follower_count}<br />Followers</li>


export default UserHeader;
