Meteor.methods({
	updateApplication (applicationId, form) {
		check(form, Object);

		Applications.update({_id: applicationId}, {$set: {
			education: form.education,
			nationality: form.nationality,
			motivation: form.motivation,
			lastUpdate: new Date()
		}});
	},

	deleteApplication(id) {
		check(id, String);

		const isSuperAdmin = Roles.userIsInRole(Meteor.userId(), ['super-admin']);

		if (isSuperAdmin) {
			Applications.remove({_id: id});
		}
	}
});