import React, { Component } from "react";
import TrackerReact from "meteor/ultimatejs:tracker-react";
import Moment from "moment";

import ApplicationSingle from "./ApplicationSingle.js";

export default class AllApplications extends TrackerReact(React.Component) {
  componentDidMount() {
    $(".collapsible").collapsible();
  }

  constructor() {
    super();
    this.state = {
      subscription: {
        applications: Meteor.subscribe("applications"),
        userFiles: Meteor.subscribe("userFiles"),
        userList: Meteor.subscribe("userList"),
      },
    };
  }

  componentWillUnmount() {
    this.state.subscription.applications.stop();
    this.state.subscription.userFiles.stop();
    this.state.subscription.userList.stop();
  }

  escapeHTML(data) {
    return { __html: data };
  }

  getApplications() {
    return Applications.find().fetch();
  }

  getApplicationFiles(applicationId) {
    return UserFiles.find({
      "meta.attachTo": {
        $elemMatch: { type: "application", id: applicationId },
      },
    }).fetch();
  }

  generateLink(id) {
    return UserFiles.findOne({ _id: id }).link(); //The "view/download" link
  }

  getApplicantName(applicantId) {
    return Meteor.users.findOne(
      { _id: applicantId },
      { fields: { profile: 1, emails: 1 } }
    );
  }

  deleteApplication(id) {
    if (confirm("Sure?")) {
      Meteor.call("deleteApplication", id);
    }
  }

  render() {
    const showDeleteButton = Roles.userIsInRole(Meteor.userId(), [
      "super-admin",
    ])
      ? true
      : false;

    return (
      <div className="container">
        <h3>All Applications</h3>
        <div className="divider"></div>

        <ul
          className="collapsible popout z-depth-3"
          data-collapsible="expandable"
        >
          {this.getApplications().map((application) => {
            let applicant = this.getApplicantName(application.applicantId);
            let motivation = this.escapeHTML(application.motivation);
            let files = this.getApplicationFiles(application._id);

            if (applicant) {
              return (
                <li key={application._id} className="collection-item avatar">
                  <div className="collapsible-header hoverable">
                    <ul className="collection">
                      <li className="collection-item avatar">
                        <img
                          src="/images/avatar.png"
                          alt=""
                          className="circle"
                        />
                        <span className="title">
                          {applicant.profile.firstName}{" "}
                          {applicant.profile.lastName} -{" "}
                          {applicant.emails[0].address}
                        </span>
                        <p>
                          {Moment(applicant.profile.dateOfBirth).fromNow(true)}
                        </p>
                        {showDeleteButton ? (
                          <span
                            className="pull-right"
                            onClick={() =>
                              this.deleteApplication(application._id)
                            }
                          >
                            Delete
                          </span>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                  <div className="collapsible-body">
                    <div className="container">
                      {application.nationality} - {application.education}
                    </div>

                    <div className="divider"></div>

                    <div className="row">
                      <div
                        className="fr-view flow-text col s9"
                        dangerouslySetInnerHTML={motivation}
                      ></div>
                      <div className="col s3">
                        <ul>
                          {files.map((file) => {
                            let link = this.generateLink(file._id);

                            // Giving the file it's correct name for downloading for the user
                            link = link.substring(0, link.lastIndexOf("/"));
                            link = link + "/" + file.name;

                            return (
                              <li key={file._id}>
                                <a
                                  href={link}
                                  target="_blank"
                                  className="truncate"
                                >
                                  {file.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
