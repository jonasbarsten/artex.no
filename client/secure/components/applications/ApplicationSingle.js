import React, {Component} from 'react';
import Moment from 'moment';

import SingleFile from '../files/SingleFile.jsx';

export default class ApplicationSingle extends Component {
	generateLink(id) {

		return UserFiles.findOne({_id: id}).link();  //The "view/download" link
	}
	
	render () {

		const application = this.props.application;
		const applicant = this.props.applicant && this.props.applicant.profile;
		const age = this.props.applicant && Moment(applicant.dateOfBirth).fromNow(true);

		// Defensive programming
		if (applicant && application) {
			return (
				<div>
					<p>Name: {applicant.firstName} {applicant.lastName}</p>
					<p>Age: {age}</p>
					<p>Nationality: {application.nationality}</p>
					<p>Education: {application.education}</p>
					<p>Motivation: {application.motivation}</p>
					{this.props.files.map( (file, key) => {

						let link = this.generateLink(file._id);

						// Giving the file it's correct name for downloading for the user
						link = link.substring(0, link.lastIndexOf("/"));
						link = link + '/' + file.name;

						return <SingleFile key={'file' + key} fileName={file.name} fileUrl={link} fileId={file._id} fileSize={file.size} />
					})}
						
				</div>
			);

		} else {
			return (
				<div></div>
			);
		}
	}
}