import React from 'react';

const SingleFile = React.createClass({

	propTypes: {
		fileName: React.PropTypes.string.isRequired,
		fileSize: React.PropTypes.number.isRequired,
		fileUrl: React.PropTypes.string,
		fileId: React.PropTypes.string.isRequired
	},

	getReadableFileSizeString(fileSizeInBytes) {

		var i = -1;
		var byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
		do {
				fileSizeInBytes = fileSizeInBytes / 1024;
				i++;
		} while (fileSizeInBytes > 1024);

		return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
	},

	removeFile(){
		"use strict";
		let conf = confirm('Are you sure you want to delete the file?') || false;
		if (conf == true) {
			Meteor.call('RemoveFile', this.props.fileId, function (err, res) {
				if (err)
					console.log(err);
			});
		}
	},


	renameFile(){
		"use strict";

		let validName = /[^a-zA-Z0-9 \.:\+()\-_%!&]/gi;
		let prompt    = window.prompt('New file name?', this.props.fileName);

		// Replace any non valid characters, also do this on the server
		if (prompt) {
			prompt = prompt.replace(validName, '-');
			prompt.trim();
		}

		if (!_.isEmpty(prompt)) {
			Meteor.call('RenameFile', this.props.fileId, prompt, function (err, res) {
				if (err)
					console.log(err);
			});
		}
	},

	render() {

		return (

				<ul className="collection with-header">
			        <li className="collection-item">
			        	<div>
			        		<span className="new badge blue" data-badge-caption="">{this.getReadableFileSizeString(this.props.fileSize)}</span>
			        		<p className="truncate">{this.props.fileName}</p>
			        		<a href="#!" onClick={this.removeFile} className="secondary-content red-text">Delete</a>
			        		{/*<a href="#!" onClick={this.renameFile} className="secondary-content blue-text">Rename &nbsp;</a>*/}
			        		<a href={this.props.fileUrl} target="_blank" className="secondary-content green-text">View &nbsp;</a>
			        	</div>
			        </li>
			    </ul>
		);
	}
});

export default SingleFile;