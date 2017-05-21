import { connect } from 'react-redux';
import PhotoCollection from './photo_collection';
import { values } from 'lodash';

const mapStateToProps = (state, ownProps) => ({
  photos: values(ownProps.photos)
});

export default connect(
  mapStateToProps,
  null
)(PhotoCollection);
