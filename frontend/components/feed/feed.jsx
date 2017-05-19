import React from 'react';
import FeedItem from './feed_item';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestAllPhotos();
  }

  // postImage(url){
  //   var photo = {
  //     user_id: this.props.currentUser.id,
  //     img_url: url,
  //
  //   }
  //   this.props.postPhoto(photo);
  // }



  render(){
    let feedItems = this.props.photos.map((photo) => (
      <FeedItem photo={photo} key={photo.created_at} />
     ));
    // let items = this.props.photos.map((photo) => (<li key={photo.created_at}>{photo.title}</li>));

     return (
       <ul className="feed">
        {feedItems}
       </ul>
     );
  }
};

export default Feed;
