import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { withRouter } from 'react-router-dom';
import { receiveSinglePhoto } from '../../actions/photo_actions';

// const mapStateToProps = ( state ) => ({
// });
//
// const mapDispatchToProps = dispatch => ({
//   postPhoto: photo => dispatch(postPhoto(photo)),
//   clearErrors: ([]) => dispatch(receiveErrors([]))
// });
//
//
// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PhotoDetail));
