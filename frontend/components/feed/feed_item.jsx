import React from 'react';
import { Link } from 'react-router-dom';

class FeedItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let {id, img_url, title, description} = this.props.photo;
     return (
       <li className="feed-item">
         <Link to={`/photos/${id}`}>
            <img src={img_url} alt={title}/>
          </Link>
         <div>
           <h2 className="feed-item-title">{title}</h2>
           <h3 className="feed-item-description">{description}</h3>
         </div>
       </li>
     );
  }
};

export default FeedItem;
