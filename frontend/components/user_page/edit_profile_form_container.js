import { connect } from 'react-redux';
import EditProfileForm from './edit_profile_form';
// import { withRouter } from 'react-router-dom';
// import { postPhoto, receiveErrors } from '../../actions/photo_actions';
import {updateUser} from '../../actions/user_actions.js';

const mapStateToProps = (ownProps, {closeModal}) => ({
  targetUser: ownProps.targetUser,
  closeModal
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
  clearErrors: ([]) => dispatch(receiveErrors([]))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfileForm);
