import { connect } from 'react-redux';
import UserPage from './user_page';
import { logout } from '../../actions/session_actions';
import { requestUserPhotos } from '../../actions/photo_actions';
import { requestTargetUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  targetUser: state.targetUser
});

const mapDispatchToProps = dispatch => ({
  requestUserPhotos : (id) => dispatch(requestUserPhotos(id)),
  requestTargetUser : (id) => dispatch(requestTargetUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
