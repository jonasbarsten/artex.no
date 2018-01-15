Meteor.methods({
	updateSiteInfoTitle (data) {
		console.log('gogo ' + data);
		check(data, Object);
		SiteInfo.update(
			{}, 
			{$set: 
				{title: data.title}
			},
   			{upsert: true}
   		);
	},
	updateSiteInfoDescription (data) {
		console.log('gogo ' + data);
		check(data, Object);
		SiteInfo.update(
			{}, 
			{$set: 
				{description: data.description}
			},
   			{upsert: true}
   		);
	}
});