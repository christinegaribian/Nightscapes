import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { createFollow,
         deleteFollow
       } from '../../actions/follow_actions';


const mapStateToProps = (state) => ({
  currentUserId: state.session.currentUser.id,
  targetUserId: state.targetUser.id
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
