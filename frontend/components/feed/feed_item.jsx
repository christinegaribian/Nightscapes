import React from 'react';

class FeedItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
     console.log(this.props);

     return (
       <li className="feed-item">
         {feedItems}
       </li>
     );
  }
};

export default FeedItem;
