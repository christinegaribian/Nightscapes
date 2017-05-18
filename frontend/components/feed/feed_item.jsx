import React from 'react';

class FeedItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {img_url, title, description} = this.props.photo;
     return (
       <li className="feed-item">
         <img src={img_url}></img>
         <div>
           <h2 className="feed-item-title">{title}</h2>
           <h3 className="feed-item-description">{description}</h3>
         </div>
       </li>
     );
  }
};

export default FeedItem;
