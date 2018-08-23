import React, {Component} from 'react';
import Moment from 'moment';
import swal from 'sweetalert';

export default class ApplicantSingle extends Component {
	componentDidMount() {
		// $('head').append('<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">');

	}

	destroyAccount() {

		var user = this.props.user;

		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this user!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: true
		},
		function(){

			Meteor.call('deleteUserApplications', user);
			Meteor.call('deleteUserFiles', user);
			Meteor.call('deleteUser', user);
	
		});
	}

	archiveAccount() {
		var user = this.props.user;

		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this user!",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#DD6B55",
			confirmButtonText: "Yes, archive it!",
			closeOnConfirm: true
		},
		function(){
			Meteor.call('archiveUser', user);
		});
	}

	render () {

		const archiveButton = this.props.archived ? null :
			<span onClick={this.archiveAccount.bind(this)} className="new badge green hoverable" data-badge-caption="">Archive</span>;

		const email = this.props.user.emails[0].address;
		const emailLink = "mailto:" + email;
		const profile = this.props.user.profile;
		const online = this.props.user.status.online ? <span className="new badge green" data-badge-caption="">Online</span> : "";
		const dateJoined = Moment(this.props.user.createdAt).format('YY/MM/DD - HH:mm');

		return (
			<li className="collection-item">
				{profile.firstName} {profile.lastName} - <a href={emailLink}>{email}</a>
				
				{archiveButton}
				<span onClick={this.destroyAccount.bind(this)} className="new badge red hoverable" data-badge-caption="">Delete</span>
				<span className="new badge blue" data-badge-caption="">{dateJoined}</span>
				{online}

			</li>
		);
	}
};