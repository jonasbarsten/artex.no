import React, {Component} from 'react';

export default class InviteForm extends Component {
	constructor() {
		super();
 
 		// Set default loading state to false
		this.state = {
			isLoading: false
		};
	}

	inviteUser(event) {
		// Set loading to true
		this.setState({isLoading: true});
		
		// do not reload on submit
		event.preventDefault();

		var assignedRoles = [];

		if (this.refs.manageUsers.checked) {
			assignedRoles.push('manage-users');
		}

		if (this.refs.moderator.checked) {
			assignedRoles.push('moderator');
		}

		// get content from input
		var email = this.refs.email.value.trim();

		if (email) {
			// Insert into DB
			// Use (), not function since a normal function would not know "this"
			Meteor.call('inviteUser', email, assignedRoles, (error, data) => {
				// call is complete
				if(error) {
					Bert.alert('Could not invite user, check your internet connection', 'danger', 'fixed-top', 'fa-frown-o');
					
					// No longer loading
					this.setState({isLoading: false});
					this.refs.email.value = "";

					// If invite was not sent, delete invite from db
					Meteor.call('deleteInvite', email);

				} else {
					Bert.alert('User invited', 'success', 'fixed-top', 'fa-smile-o');
					
					// No longer loading
					this.setState({isLoading: false});

					// Clear input field
					this.refs.email.value = "";
				}
			});
		}
	}

	render () {

		const loading = this.state.isLoading ? 
			<div className="progress">
    			<div className="indeterminate"></div>
			</div>
		: "";

		return (
			<div className="row z-depth-1">
				
				<form className="col s12" onSubmit={this.inviteUser.bind(this)}>
					<div className="row">

						<div className="input-field col s4">
							<input
								id="email"
								className="validate"
								type="email" 
								ref="email"
							/>
							<label htmlFor="email">Email</label>
						</div>

						<div className="input-field col s8">
							<div className="col s4">
								<input 
									id="manageUsers"
									className="filled-in"
									type="checkbox"
									ref='manageUsers'
								/>
								<label htmlFor="manageUsers">Administrere brukere</label>
							</div>
							<div className="col s4">
								<input 
									id="moderator"
									className="filled-in"
									type="checkbox"
									ref='moderator'
									defaultChecked
								/>
								<label htmlFor="moderator">Faglig Råd</label>
							</div>
							<div className="col s4">
								<button className="btn waves-effect waves-light blue" type="submit">Send &nbsp;
									<i className="mdi mdi-send"></i>
								</button>
							</div>
						</div>

					</div>



				</form>
				{loading}
			</div>
		);
	}
};