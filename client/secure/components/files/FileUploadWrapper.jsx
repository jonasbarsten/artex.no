import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {_} from 'meteor/underscore';

import SingleFile from './SingleFile.jsx';
import UploadNewFile from './UploadNewFile.js';


export default class FileUploadWrapper extends Component {

	generateLink(id) {

		return UserFiles.findOne({_id: id}).link();  //The "view/download" link
	}

	render() {

		// Only rendering if max files not yet reached
		const uploadNewFile = (this.props.files.length < this.props.max) ? <UploadNewFile attachToType={this.props.attachToType} attachToId={this.props.attachToId} max={this.props.max} /> : "";
		const showUploadNew = (this.props.files.length < this.props.max) ? "col s6" : "";

		return (

			<div className="row col s12">

				<div className={showUploadNew}>
					{uploadNewFile}
				</div>

				<div className={showUploadNew}>

					{this.props.files.map ( (file, key) => {

						let link = this.generateLink(file._id);

						// Giving the file it's correct name for downloading for the user
						link = link.substring(0, link.lastIndexOf("/"));
						link = link + '/' + file.name;

						return <SingleFile key={'file' + key} fileName={file.name} fileUrl={link} fileId={file._id} fileSize={file.size} />	

					})}
				</div>


			</div>

		);

	}
};