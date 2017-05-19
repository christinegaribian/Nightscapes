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
    this.props.login(
      {username: "CaptainJaneway", password: "password"}
    );
  }

  renderErrors() {
    // if (this.props.errors){
      return(
        <ul className="error">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    // }
  }

  render() {
    let formType = this.props.formType;
    let link;
    let button_text;
    if (formType === 'login'){
      link = <Link to="/signup" onClick={this.props.clearErrors}>>>Sign up for an account</Link>;
      button_text = "Sign In"
    } else {
      link = <Link to="/login" onClick={this.props.clearErrors}>>>Already a member?</Link>;
      button_text = "Sign Up"
    }
    return (
      <div className="auth-form">
        <div className = "headings">
          <h1>Explore the Universe</h1>
          <h2>with Nightscapes</h2>
          <h3>The premier astrophotography community</h3>
        </div>
          <div className="form-container">
            {this.renderErrors()}

            <form onSubmit={this.handleSubmit} className="form">

                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="Username"
                  />
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="Password"
                  />
                <br/>
                <div className="button-container">
                  <input type="submit"
                    value={button_text}
                    />
                  <input type="submit"
                    value="Guest"
                    onClick={this.handleGuest}
                    />
                </div>
                {link}
            </form>
          </div>
          <div className="video-background">
              <div className="video-foreground">
                <iframe src='//gifs.com/embed/iss-timelapse-the-english-channel-and-beyond-pgA10p' frameBorder='0' scrolling='no' width='640px' height='360px' ></iframe>
              </div>
          </div>

        </div>
      );
  }
}

export default withRouter(SessionForm);
