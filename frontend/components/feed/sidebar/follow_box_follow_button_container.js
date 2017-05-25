
import { connect } from 'react-redux';
import FollowBoxFollowButton from './follow_box_follow_button';
import { followUserFromFollowBox,
         unfollowUserFromFollowBox
       } from '../../../actions/follow_actions';
import {idsSelector} from '../../../util/selectors';

const mapStateToProps = (state, ownProps) => ({
  targetUser: ownProps.targetUser,
  currentUserId: state.session.currentUser.id,
  followerIds: idsSelector(ownProps.targetUser.followers)
});

const mapDispatchToProps = (dispatch) =>  ({
    followUser: (id) => dispatch(followUserFromFollowBox(id)),
    unfollowUser: (id) => dispatch(unfollowUserFromFollowBox(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowBoxFollowButton);
