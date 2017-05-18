import { connect } from 'react-redux';
import Feed from './feed';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(Feed);
