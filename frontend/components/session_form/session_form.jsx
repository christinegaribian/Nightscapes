import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleGuest(e){
    e.preventDefault();
    this.props.processForm({username: "CaptainJaneway", password: "password"});
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className="error">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  renderLogin () {
    return (
      <div className="login-form-container">
        {this.renderErrors()}

        <form className="login-form">
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
              placeholder="Username"
              />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
              placeholder="Password"
              />
            <br/>
            <div className="button-container">
              <input type="submit" value="Log In" onClick={this.handleSubmit}/>
              <input type="submit" value="Guest" onClick={this.handleGuest}/>
            </div>
          <Link to="/signup">>>Sign up for an account</Link>
        </form>
      </div>
    )
  }

  renderSignUp () {
    return (
      <div className="signup-form-container">
        {this.renderErrors()}

        <form onSubmit={this.handleSubmit} className="signup-form">

            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="signup-input"
              placeholder="Username"
              />
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signup-input"
              placeholder="Password"
              />
            <br/>
            <div className="button-container">
              <input type="submit" value="Sign Up"/>
            </div>
          <Link to="/login">>>Already a member?</Link>
        </form>
      </div>
    )
  }

  render() {
    let formType = this.props.formType;
    if (formType === 'login') {
      return (
        <div className="auth-form">
          <h1>Explore the Universe</h1>
          <h2>with photography</h2>
          {this.renderLogin()}
        </div>
      )
    } else {
      return (
        <div className="auth-form">
          <h1>Explore the Universe</h1>
          <h2>with photography</h2>
          {this.renderSignUp()}
        </div>
      )
    }
  }
}

export default withRouter(SessionForm);
