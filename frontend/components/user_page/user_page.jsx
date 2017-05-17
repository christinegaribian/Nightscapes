import React from 'react';
import {Link} from 'react-router-dom';

class UserPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let currentUser = this.props.currentUser;
    return (
      <div>THIS IS THE USER PAGE</div>
    )
  }
}

export default UserPage;
