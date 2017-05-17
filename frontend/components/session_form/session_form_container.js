import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';

const  mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    clearErrors: ([]) => dispatch(receiveErrors([])),
    login: user => dispatch(login(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
