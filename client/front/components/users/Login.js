import React, { Component } from "react";
import M from "materialize-css";

// import Materialize from "materialize-css/js";

export default class Login extends Component {
  componentDidMount() {
    if (Meteor.userId()) {
      // If user is already logged in, send to secure
      FlowRouter.go("/secure");
    }

    M.updateTextFields();
  }

  handleSubmit(event) {
    // Prevent reload
    event.preventDefault();

    // Fetch data from form
    const email = this.refs.emailAddress.value;
    const password = this.refs.password.value;

    // Validate
    check(email, ValidEmail);
    check(password, String);

    // Login
    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        FlowRouter.go("/secure");
      }
    });
  }

  render() {
    return (
      <div className="login container">
        <h4>Login</h4>
        <div className="divider"></div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input
                    ref="emailAddress"
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input
                    ref="password"
                    id="password"
                    type="password"
                    className="validate"
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              <button
                className="btn grey waves-effect waves-light"
                type="submit"
              >
                Login
              </button>
            </form>
          </div>
          <br />
          <p>
            Don't have an account? <a href="/signup">Signup</a>
          </p>
          <p>
            Forgot your password? <a href="/forgot">Reset password</a>
          </p>
        </div>
      </div>
    );
  }
}
