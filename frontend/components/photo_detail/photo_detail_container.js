import { connect } from 'react-redux';
import PhotoDetail from './photo_detail';
import { withRouter } from 'react-router-dom';
import { requestSinglePhoto } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';

const mapStateToProps = ( state, ownProps ) => ({
  photo: selectPhoto(ownProps.match.params.photoId, state)
});

const mapDispatchToProps = dispatch => ({
  requestSinglePhoto: id => dispatch(requestSinglePhoto(id))
});


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail));
