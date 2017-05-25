import { connect } from 'react-redux';
import Feed from './feed';
import { requestFeedPhotos
       } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedPhotos: (id) => dispatch(requestFeedPhotos(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
