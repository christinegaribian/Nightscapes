import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const  mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  profile_picture_url: state.session.currentUser.user_img_url,
  username: state.session.currentUser.username,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: user => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
