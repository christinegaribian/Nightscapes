import { connect } from 'react-redux';
import Feed from './feed';
// import { withRouter } from 'react-router-dom';
import { requestAllPhotos
       } from '../../actions/photo_actions';
import { selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: selectAllPhotos(state)
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestAllPhotos: () => dispatch(requestAllPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
