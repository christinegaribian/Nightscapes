import { connect } from 'react-redux';
import UserHeader from './user_header';

const mapStateToProps = (state, ownProps) => ({
  targetUser: ownProps.targetUser,
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(UserHeader);
