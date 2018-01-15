import React, {Component} from 'react';

export default class UploadNewFile extends Component {

	constructor() {
		super();
		this.state = {
			uploading: [],
			progress: 0,
			inProgress: false
		}
	}

	uploadIt(e){
		"use strict";
		e.preventDefault();

		let self = this;

		if (e.currentTarget.files && e.currentTarget.files[0]) {
			// We upload only one file, in case
			// there was multiple files selected
			var file = e.currentTarget.files[0];

			if (file) {
				let uploadInstance = UserFiles.insert({
					file: file,
					
					meta: {
						locator: self.props.fileLocator,
						userId: Meteor.userId(), // Optional, used to check on server for file tampering
						attachTo: [
							{type: this.props.attachToType, id: this.props.attachToId}
						]
					},
					streams: 'dynamic',
					chunkSize: 'dynamic',
					allowWebWorkers: true // If you see issues with uploads, change this to false
				}, false);

				this.setState({
					uploading: uploadInstance, // Keep track of this instance to use below
					inProgress: true // Show the progress bar now
				});

				// These are the event functions, don't need most of them, it shows where we are in the process
				uploadInstance.on('start', function () {
					// console.log('Starting');
				});

				uploadInstance.on('end', function (error, fileObj) {
					// console.log('On end File Object: ', fileObj);
				});

				uploadInstance.on('uploaded', function (error, fileObj) {
					// console.log('uploaded: ', fileObj);

					// Remove the filename from the upload box
					self.refs['fileinput'].value = '';

					// Reset our state for the next file
					self.setState({
						uploading: [],
						progress: 0,
						inProgress: false
					});
				});

				uploadInstance.on('error', function (error, fileObj) {
					// console.log('Error during upload: ' + error);
				});

				uploadInstance.on('progress', function (progress, fileObj) {
					// console.log('Upload Percentage: ' + progress);
					// Update our progress bar
					self.setState({
						progress: progress
					})
				});

				uploadInstance.start(); // Must manually start the upload
			}
		}
	}

	showUploads() {
		// console.log('**********************************', this.state.uploading);

		if (!_.isEmpty(this.state.uploading)) {
			return <div>

				<div className="progress">
					<div style={{width: this.state.progress + '%'}} 
						 
						 className="determinate">
						<span className="sr-only">{this.state.progress}% Complete (success)</span>
						<span>{this.state.progress}%</span>
					</div>
				</div>
			</div>
		}
	}

	render () {
		return (

			<div className="row">
				<form action="#">
					<div className="file-field input-field">
						<div className="btn waves-effect waves-light">
							<span>Upload file</span>
							<input 
								type="file"
								id="fileinput"
								disabled={this.state.inProgress}
								ref="fileinput"
								onChange={this.uploadIt.bind(this)}
							/>
						</div>
						<div className="file-path-wrapper">
							<input className="file-path validate" type="text" />
						</div>
					</div>
				</form>
				{this.showUploads()}
			</div>
			
		);
	}
}