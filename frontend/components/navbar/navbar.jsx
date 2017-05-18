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
          <img className="logo"
            alt="Nightscapes logo"
            src="http://res.cloudinary.com/dl091hw7z/image/upload/v1495057579/white_planet_epysbv.png"
            />
          <Link to="/">NIGHTSCAPES</Link>
        </div>

        <div className="right">
          <Link to="/users/:userId">
            <img src={currentUser.user_img_url}
              className="user-img-url"/>
          </Link>
          <h1>{currentUser.username}</h1>
          <Link to="/upload">
            <i className="fa fa-cloud-upload"
                aria-hidden="true"
                id="upload-icon"
                alt="Upload Image"
                ></i>
          </Link>
          <i className="fa fa-sign-out"
            aria-hidden="true"
            onClick={this.props.logout}
            alt="Sign Out" 
            id="logout-icon"
            ></i>
        </div>
      </nav>
    )
  }
}

export default Navbar;
