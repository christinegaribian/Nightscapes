import { connect } from 'react-redux';
import FollowBox from './follow_box';
import { requestNewFollowers } from '../../../actions/follow_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  newFollowers: state.newFollowers
});

const mapDispatchToProps = dispatch => ({
  requestNewFollowers: () => dispatch(requestNewFollowers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowBox);
