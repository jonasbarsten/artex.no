import React, { Component } from "react";
import AccountsUI from "../../AccountsUI.js";

export default class SecureNav extends Component {
  render() {
    // Reactive meny items based on roles
    const canManageUsers = Roles.userIsInRole(Meteor.userId(), [
      "super-admin",
      "manage-users",
    ]) ? (
      <li className={ActiveRoute.path("/secure/users") && "active"}>
        <a href="/secure/users">Users</a>
      </li>
    ) : (
      ""
    );

    const isModerator = Roles.userIsInRole(Meteor.userId(), [
      "super-admin",
      "moderator",
    ]) ? (
      <li className={ActiveRoute.path("/secure/applications") && "active"}>
        <a href="/secure/applications">Applications</a>
      </li>
    ) : (
      ""
    );

    const isApplicant = Roles.userIsInRole(Meteor.userId(), ["applicant"]) ? (
      <li className={ActiveRoute.path("/secure/myapplications") && "active"}>
        <a href="/secure/myapplications">Applications</a>
      </li>
    ) : (
      ""
    );

    // Build component
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">
            &nbsp;&nbsp;PopUp - Portal
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://artex.no">Om PopUp</a>
            </li>
            {canManageUsers}
            {isModerator}
            {isApplicant}
            <li className={ActiveRoute.path("/secure/profile") && "active"}>
              <a href="/secure/profile">Profile</a>
            </li>
            <AccountsUI />
          </ul>
        </div>
      </nav>
    );
  }
}
