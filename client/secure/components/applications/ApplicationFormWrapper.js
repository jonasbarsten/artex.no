import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ApplicationFormSingle from './ApplicationFormSingle.js';

export default class ApplicationFormWrapper extends TrackerReact(React.Component) {

	constructor() {
		super();
		this.state = {
			subscription: {
				applications: Meteor.subscribe('applications'),
				userFiles: Meteor.subscribe('userFiles')
			}
		}
	}

	componentWillUnmount() {
		this.state.subscription.applications.stop();
		this.state.subscription.userFiles.stop();
	}

	applicationDocs() {
		let application = Applications.find({'applicantId': Meteor.userId()}).fetch();

		if (application.length == 0) {
			Meteor.call('createApplication', Meteor.userId(), (err, res) => {
				if (err) {
					console.log(err);
				} else {
					application = res;
				}
			})
		};

		return application;
	}

	userFiles() {
		return UserFiles.find().fetch();
	}

	render () {

		const userFiles = this.userFiles();

		return (
			<div className="container">

				<h3>Applications</h3>

				<div className="divider"></div>

				{this.applicationDocs().map((doc) => {
					return <ApplicationFormSingle key={doc._id} application={doc} files={userFiles}/>

				})}

			</div>
		);
	}
}