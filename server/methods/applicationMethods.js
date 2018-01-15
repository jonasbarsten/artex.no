Meteor.methods({
	updateApplication (applicationId, form) {
		check(form, Object);

		Applications.update({_id: applicationId}, {$set: {
			education: form.education,
			nationality: form.nationality,
			motivation: form.motivation,
			lastUpdate: new Date()
		}});
	}
});