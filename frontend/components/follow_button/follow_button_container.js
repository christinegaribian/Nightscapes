
import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { followUser,
         unfollowUser
       } from '../../actions/follow_actions';
import {idsSelector} from '../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  targetUserId: ownProps.targetUserId,
  followingIds: idsSelector(state.session.currentUser.following)
});
// followerIds: idsSelector(state.targetUser.followers)

const mapDispatchToProps = (dispatch) =>  ({
    followUser: (id) => dispatch(followUser(id)),
    unfollowUser: (id) => dispatch(unfollowUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
