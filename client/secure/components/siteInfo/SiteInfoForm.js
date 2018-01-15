import React, {Component} from 'react';

export default class SiteInfoForm extends Component {

	// Subscribe
	constructor() {
		super();
		this.state = {
			subscription: {
				siteInfo: Meteor.subscribe('siteInfo')
			}
		}
	}

	getSiteInfo () {
		return siteInfo = SiteInfo.find().fetch();
	}

	updateSiteInfoTitle(event) {
		
		// do not reload on submit
		event.preventDefault();

		// get content from input
		title = this.refs.siteTitle.value.trim();

		if (title) {
			// Insert into DB
			// Use (), not function since a normal function would not know "this"
			Meteor.call('updateSiteInfoTitle', title, (error, data) => {
				// call is complete
				if(error) {
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o')
				} else {
					// Clear input field
					this.refs.siteTitle.value = "";
				}
			});
		}
	}

	updateSiteInfoDescription(event) {
		
		// do not reload on submit
		event.preventDefault();

		// get content from input
		description = this.refs.description.value.trim();

		if (title) {
			// Insert into DB
			// Use (), not function since a normal function would not know "this"
			Meteor.call('updateSiteInfoDescription', description, (error, data) => {
				// call is complete
				if(error) {
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o')
				} else {
					// Clear input field
					this.refs.description.value = "";
				}
			});
		}
	}

	render() {
		return (
			<div>
				<p>Title: {this.getSiteInfo.title}</p>
				<form onSubmit={this.updateSiteInfoTitle.bind(this)}>
					<input 
						type="text" 
						ref="siteTitle"
						placeholder="Site Title"
					/>
					<input type="submit" value="Submit" />
				</form>
				<form onSubmit={this.updateSiteInfoDescription.bind(this)}>
					<input 
						type="text" 
						ref="description"
						placeholder="Site description"
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

}