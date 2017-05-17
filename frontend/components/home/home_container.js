import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const  mapStateToProps = (state) => ({
  session: state.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: user => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
