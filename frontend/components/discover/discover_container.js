import { connect } from 'react-redux';
import Discover from './discover';
import { requestAllPhotos,
          receiveAllPhotos
       } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPhotos: () => dispatch(requestAllPhotos()),
    clearPhotos: () => dispatch(receiveAllPhotos({}))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
