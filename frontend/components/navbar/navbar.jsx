import React from 'react';
import {Link} from 'react-router-dom';
class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let currentUser = this.props.currentUser;
    return (
      <nav className="navbar">
        <div className="left">
          <img className="logo" src="file:///Users/christinegaribian/Desktop/Nightscapes/Nightscapes/app/assets/images/planet.jpeg"/>
          <Link to="/">NIGHTSCAPES</Link>
        </div>

        <div className="right">
          <Link to="/users/:userId"><img src={currentUser.user_img_url} className="user-img-url"/></Link>
          <h1>{currentUser.username}</h1>
          <i className="fa fa-cloud-upload"
            aria-hidden="true"
            id="upload-icon"
            ></i>
          <i className="fa fa-sign-out"
            aria-hidden="true"
            onClick={this.props.logout}
            id="logout-icon"
            ></i>
        </div>
      </nav>
    )
  }
}

export default Navbar;