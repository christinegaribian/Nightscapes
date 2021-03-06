import React from 'react';
import { Link } from 'react-router-dom';

class PhotoDetail extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    let { img_url, title, description, user } = this.props.photo;
    return (
      <section className="photo-detail">
        <img className="photo-detail-figure" src={img_url} alt={title}/>
        <section className="photo-detail-info">
            <Link to={`/users/${user.id}`} className="photo-detail-user">
              <span>{user.username}</span>
              <img src={user.img_url}/>
            </Link>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </section>
      </section>
    );
  }
};

export default PhotoDetail;
