import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

export default withRouter(connect(
  mapStateToProps,
  null
)(PhotoUploadForm));
