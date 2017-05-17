import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../navbar/navbar_container';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <NavbarContainer session={this.props.session}/>
    )
  }
}
export default Home;
