import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <nav>
        <logo>
          <span>(logo)</span>
          <h1>NIGHTSCAPES</h1>
        </logo>

        <div>
          <img src={this.props.profile_picture_url}/>
          <h1>{this.props.username}</h1>

        </div>

        <i className="fa fa-cloud-upload" aria-hidden="true" id="upload-icon"></i>
        <i className="fa fa-sign-out" aria-hidden="true" onClick={this.props.logout}></i>

    </nav>
    )
  }
}
export default Home;
