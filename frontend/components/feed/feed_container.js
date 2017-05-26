import { connect } from 'react-redux';
import Feed from './feed';
import { requestFeedPhotos,
         receiveAllPhotos
       } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: selectAllPhotos(state),
  newFollowers: state.newFollowers
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedPhotos: (id) => dispatch(requestFeedPhotos(id)),
    clearPhotos: () => dispatch(receiveAllPhotos({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
