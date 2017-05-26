import React from 'react';
import FeedItem from './feed_item';
import FeedSidebar from './sidebar/feed_sidebar';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.loadFunc = this.loadFunc.bind(this);
  }

  componentWillUnmount(){
    this.props.clearPhotos();
  }

  componentDidMount( ){
    this.props.requestFeedPhotos(this.props.currentUser.id);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.currentUser.following.length != nextProps.currentUser.following.length ) {
      this.props.requestFeedPhotos(this.props.currentUser.id);
    }
  }

  loadFunc(){
    console.log('loading');
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
        
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h5 className="copyright">
          Photos courtesy of NASA's
          <a target="_blank" href="https://apod.nasa.gov/apod/archivepix.html">     Astonomy Image of the Day
          </a>
        </h5>

        <FeedSidebar currentUser={this.props.currentUser}/>
      </div>
    );
  }
};

export default Feed;
