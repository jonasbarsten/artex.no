import React, {Component} from 'react';

import SiteInfoForm from './SiteInfoForm.js'

export default class SiteInfoWrapper extends Component {

	// Subscribe
	constructor() {
		super();
		this.state = {
			subscription: {
				siteInfo: Meteor.subscribe('siteInfo')
			}
		}
	}

	// Stop subscription when component unmounts
	componentWillUnmount() {
		this.state.subscription.siteInfo.stop();
	}

	getSiteInfo () {
		return siteInfo = SiteInfo.find().fetch();
	}

	render () {

		
		return (
				<div>
					<h1>Site Info</h1>
					<SiteInfoForm />
					{this.getSiteInfo().map( (data) => {
						return (
							<div>
								<p>Title {data.title}</p>
								<p>{data.description}</p>
							</div>
						);
					})}

				</div>

		);
	}
};