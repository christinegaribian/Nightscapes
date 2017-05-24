import { connect } from 'react-redux';
import ProfilePictureUpload from './photo_upload_form';
import { updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, {closeModal}) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  closeModal
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  clearErrors: ([]) => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePictureUpload);
