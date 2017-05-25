import React from 'react';
import FeedItem from './feed_item';
import FeedSidebar from './feed_sidebar';

class Feed extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestFeedPhotos(this.props.currentUser.id);
  }


  render(){
    let feedItems = this.props.photos.map((photo) => (
        <FeedItem photo={photo} key={photo.created_at} />
     ));
     return (
       <div className="feed-container">
       <ul className="feed">
        {feedItems}
       </ul>

       <FeedSidebar currentUser={this.props.currentUser}/>
       </div>
     );
  }
};

export default Feed;
