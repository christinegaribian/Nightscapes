import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar));
