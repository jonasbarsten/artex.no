import React, {Component} from 'react';
// import uuid from 'uuid/v4';

export default class ApplicantEmailList extends Component {

	render () {

		// const id = uuid();
		// console.log(id);

		if (this.props.userList) {
			var userList = this.props.userList;
		}
		
		var emailList = [];

		if (document.getElementById(this.props.id)) {
			var textArea = document.getElementById(this.props.id);
		}
		

		if (userList) {
			if (textArea) {
				userList.map( (user) => {
				if (Roles.userIsInRole(user._id, 'applicant')) {
					emailList.push(user.emails[0].address);
				}
			});
			textArea.value = emailList;	
			}
			
		}	

		return (
			<div>
				<p>Email List</p>
				<textarea id={this.props.id}></textarea>
			</div>

			);
	}
}