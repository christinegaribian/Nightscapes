import { connect } from 'react-redux';
import UserHeader from './user_header';
import { requestTargetUserPhotos } from '../../actions/photo_actions';
import { requestTargetUser,
         receiveTargetUser
       } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  targetUser: ownProps.targetUser
});
//
// const mapDispatchToProps = dispatch => ({
//   requestTargetUser : (id) => dispatch(requestTargetUser(id))
// });

export default connect(
  mapStateToProps,
  null
)(UserHeader);
