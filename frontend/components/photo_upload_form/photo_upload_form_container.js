import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import { withRouter } from 'react-router-dom';
import { postPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  postPhoto: photo => dispatch(postPhoto(photo))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm));
