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

  componentWillReceiveProps(){
    $("#gallery").justifiedGallery({
      rowHeight : 250,
      lastRow : 'justify',
      margins : 15,
      border: 150,
      captions : false
    });

    $(window).scroll(function() {
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        for (var i = 0; i < 5; i++) {
          $('#gallery').append('<a>' +
          '<img src="http://path/to/image" />' +
          '</a>');
        }
        $('#gallery').justifiedGallery('norewind');
      }
    });
  }

  componentDidMount(){
    $("#gallery").justifiedGallery({
      rowHeight : 250,
      lastRow : 'justify',
      margins : 15,
      border: 150,
      captions : false
    });
  }

  render() {
    let photos = this.props.photos;
    let noPhotos;
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

    if (photos.length === 0) {
      noPhotos = "You haven't taken any pictures yet!";
    }
    return (
      <div className="gallery-container">
        <div id="gallery"
          className='image-grid'>
          <h2 className="no-photo-message">{noPhotos}</h2>
          {photoCollectionItems}
        </div>
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
