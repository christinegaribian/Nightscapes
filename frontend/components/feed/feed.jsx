import React from 'react';
import FeedItem from './feed_item';
import FeedSidebar from './feed_sidebar';
import InfiniteScroll from 'react-infinite-scroller';

class Feed extends React.Component {
  constructor(props){
    super(props);
    this.loadFunc = this.loadFunc.bind(this);
  }

  componentDidMount(){
    this.props.requestFeedPhotos(this.props.currentUser.id);
  }

  loadFunc(){
    alert('loading');
  }

  render(){
    let feedItems = this.props.photos.map((photo) => (
      <FeedItem photo={photo} key={photo.created_at} />
    ));
    return (
      <div className="feed-container">

        <InfiniteScroll
          pageStart={0}
          loadMore={this.loadFunc}
          hasMore={true || false}
          loader={<div className="loader">Loading ...</div>}
          >
          <ul className="feed">
            {feedItems}
          </ul>
        </InfiniteScroll>

        <FeedSidebar currentUser={this.props.currentUser}/>
      </div>
    );
  }
};

export default Feed;
