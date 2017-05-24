import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
// import { withRouter } from 'react-router-dom';
// import { postPhoto, receiveErrors } from '../../actions/photo_actions';

const mapStateToProps = (state, {closeModal}) => ({
  currentUser: state.session.currentUser,
  errors: state.errors,
  closeModal
});

const mapDispatchToProps = dispatch => ({
  postPhoto: photo => dispatch(postPhoto(photo)),
  clearErrors: ([]) => dispatch(receiveErrors([]))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm));
