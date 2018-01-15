import React from 'react';
// import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

// Import Components
import InvitedUserSingle from './InvitedUserSingle.js';
import InviteForm from './InviteForm.js';
import InviteSingle from './InviteSingle.js';
import ApplicantSingle from './ApplicantSingle.js';
import ApplicantEmailList from './ApplicantEmailList.js';


// Resolutions component

export default class UsersWrapper extends TrackerReact(React.Component) {

	componentDidMount() {
		$('ul.tabs').tabs();
	}

	// Subscribe
	constructor() {
		super();
		this.state = {
			subscription: {
				userList: Meteor.subscribe('userList'),
				invites: Meteor.subscribe('invites')
			}
		}
	}

	// Stop subscription when component unmounts
	componentWillUnmount() {
		this.state.subscription.userList.stop();
		this.state.subscription.invites.stop();
	}

	// Get users

	userList() {
		return Meteor.users.find().fetch();
	}

	// Get invites
	invites() {
		return Invites.find().fetch();
	}

	// Render component
	render() {

		if (this.userList()) {
			var userList = this.userList();
		} else {
			var userList = [];
		}

		return (
			<div className="container">
				<h3>Users</h3>
				<div className="divider"></div>
				<div className="row">
					<div className="col s12">
						<ul className="tabs">
							<li className="tab col s4"><a className="active" href="#crewTab">Crew</a></li>
							<li className="tab col s4"><a href="#pendingInvitesTab">Pending Invites</a></li>
							<li className="tab col s4"><a href="#applicantsTab">Applicants</a></li>

						</ul>
					</div>

					<div id="crewTab" className="col s12">
						<h5>Invite</h5>

						<InviteForm />

						<h5>Crew</h5>
						<div className="row z-depth-1 div-list">
							{this.userList().map( (user) => {

								var isInvited = Roles.userIsInRole(user._id, 'invited');

								if (isInvited) {

									// Do not show current user
									if (user._id !== Meteor.userId()) {
										return <InvitedUserSingle key={user._id} user={user}></InvitedUserSingle>
									}
								}

							})}
						</div>
					</div>

					<div id="pendingInvitesTab" className="col s12">
						<ul className="collection">
							{this.invites().map( (invite) => {

								// Filter out invitations that have been used
								if (invite.accountCreated !== true) {
									return <InviteSingle key={invite._id} invite={invite}></InviteSingle>
								}
								
							})}
						</ul>
					</div>

					<div id="applicantsTab" className="col s12">
						<ApplicantEmailList userList={userList}/>
						<ul className="collection">
							{this.userList().map( (user) => {

								var isApplicant = Roles.userIsInRole(user._id, 'applicant');

								if (isApplicant) {
									return <ApplicantSingle key={user._id} user={user}></ApplicantSingle>
								}
								
							})}
						</ul>
					</div>

				</div>

			</div>
		);
	}

};