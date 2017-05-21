import { connect } from 'react-redux';
import PhotoCollection from './photo_collection';

const mapStateToProps = (state, ownProps) => ({
  photos: ownProps.photos
});

export default connect(
  mapStateToProps,
  null
)(PhotoCollection);
