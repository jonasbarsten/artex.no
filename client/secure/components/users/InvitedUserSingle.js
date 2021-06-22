import React, { Component } from "react";
import swal from "sweetalert";

export default class InvitedUserSingle extends Component {
  toggleManageUsers() {
    Meteor.call("toggleManageUsers", this.props.user);
  }

  toggleModerator() {
    Meteor.call("toggleModerator", this.props.user);
  }

  deleteUser() {
    var user = this.props.user;

    swal(
      {
        title: "Are you sure?",
        text: "You will not be able to recover this user!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: true,
      },
      function () {
        Meteor.call("deleteUser", user, function (err, data) {
          if (err) {
            swal("Deleted!", "The user cound not be deleted.", "warning");
          } else {
            // swal("Deleted!", "The user has been deleted.", "success");
          }
        });
      }
    );
  }
  render() {
    const profile = this.props.user.profile;
    const online = this.props.user.status.online ? (
      <span className="new badge green" data-badge-caption="">
        Online
      </span>
    ) : (
      ""
    );

    return (
      <div className="row">
        <div className="col s4">
          {profile.firstName} {profile.lastName}
          {online}
        </div>
        <div className="col s8">
          <div className="col s4">
            <input
              id="invitedCanManageUsers"
              type="checkbox"
              readOnly={true}
              checked={Roles.userIsInRole(this.props.user._id, [
                "manage-users",
              ])}
              onClick={this.toggleManageUsers.bind(this)}
              className="filled-in"
            />
            <span>Administrere brukere</span>
          </div>
          <div className="col s4">
            <input
              id="invitedIsModerator"
              type="checkbox"
              readOnly={true}
              checked={Roles.userIsInRole(this.props.user._id, ["moderator"])}
              onClick={this.toggleModerator.bind(this)}
              className="filled-in"
            />
            <span>Faglig Råd</span>
          </div>
          <div className="col s4">
            <button
              className="btn waves-effect waves-light red"
              onClick={this.deleteUser.bind(this)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}
