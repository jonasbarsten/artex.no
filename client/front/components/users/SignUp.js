import React, { Component } from "react";
import swal from "sweetalert";
import moment from "moment";
import M from "materialize-css";

export default class SignUp extends Component {
  componentDidMount() {
    if (Meteor.userId()) {
      // If user is already logged in, send to secure
      FlowRouter.go("/secure");
    }

    $(".datepicker").pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 100, // Creates a dropdown of 100 years to control year
      format: "yyyy-mm-dd",
      firstDay: "monday",
      min: undefined,
      max: "today",
    });

    M.updateTextFields();
  }

  handleSubmit(event) {
    // Prevent reload
    event.preventDefault();

    // Fetch data from form
    const email = this.refs.emailAddress.value;
    const firstName = this.refs.firstName.value;
    const lastName = this.refs.lastName.value;
    const dateOfBirth = this.refs.dateOfBirth.value;
    const password = this.refs.password.value;

    // Validate

    check(email, ValidEmail);
    check(firstName, String);
    check(lastName, String);
    check(password, String);
    check(dateOfBirth, String);

    const now = moment();
    const birth = moment(dateOfBirth);

    const yearsOld = moment.duration(now.diff(birth)).asYears();

    if (yearsOld <= 1) {
      swal(
        "I dont't think you are less than one year old, please input your correct date of birth."
      );
      return;
    }

    // Make user object

    let user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      password: Accounts._hashPassword(password),
    };

    // Check token (creating user and giving role 'invited' in method if token matches)

    Meteor.call("createStandardUser", user, function (error) {
      if (error) {
        alert(error.reason);
      } else {
        Meteor.loginWithPassword(user.email, password, function (error) {
          if (error) {
            alert(error.reason);
          } else {
            FlowRouter.go("/secure");
          }
        });
      }
    });
  }

  render() {
    const openRegistration = true;

    if (!openRegistration) {
      return (
        <div className="signup container">
          <h4>Registration is closed</h4>
          <div className="divider"></div>
          <p>
            Already have an account? <a href="/login">Log In</a>
          </p>
        </div>
      );
    }

    return (
      <div className="signup container">
        <h4>Sign up</h4>
        <div className="divider"></div>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s6">
                <input
                  ref="firstName"
                  id="first_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  ref="lastName"
                  id="last_name"
                  type="text"
                  className="validate"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <label htmlFor="dateOfBirth">Date of birth (DD/MM/YYYY)</label>
                <input
                  ref="dateOfBirth"
                  id="dateOfBirth"
                  type="date"
                  className="datepicker"
                />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
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
              <div className="input-field col s12">
                <input
                  ref="password"
                  id="password"
                  type="password"
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button className="btn grey waves-effect waves-light" type="submit">
              Sign up
            </button>
          </form>
        </div>

        <p style={{ color: "red" }}>
          Vi lagrer informasjonen i skjema for å kunne sende deg info og
          nyhetsbrev i tråd med nye GDPR-retningslinjer fra Datatilsynet.
        </p>

        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
    );
  }
}
