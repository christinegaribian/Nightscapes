import { connect } from 'react-redux';
import UserPage from './user_page';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  targetUser: state.targetUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestUserPhotos : (id) => dispatch(requestUserPhotos(id)),
  requestTargetUser : (id) => dispatch(requestTargetUser(id)),
  createPhoto : (photo, origin) => dispatch(createPhoto(photo, origin))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
