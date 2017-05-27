import { connect } from 'react-redux';
import UserPage from './user_page';
import { requestTargetUserPhotos } from '../../actions/photo_actions';
import { requestTargetUser,
        receiveTargetUser
       } from '../../actions/user_actions';
import { 
         receiveAllPhotos
      } from '../../actions/photo_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  photos: state.photos,
  targetUser: state.targetUser
});

const mapDispatchToProps = dispatch => ({
  requestTargetUserPhotos : (id) => dispatch(requestTargetUserPhotos(id)),
  requestTargetUser : (id) => dispatch(requestTargetUser(id)),
  clearTargetUser : () => dispatch(receiveTargetUser({})),
  clearPhotos: () => dispatch(receiveAllPhotos({}))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
