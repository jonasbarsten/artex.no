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
	},

	createApplication(applicantId) {
		check(applicantId, String);

		const applicationExists = Applications.findOne({applicantId: applicantId});

		if (!applicationExists) {
			const application = Applications.insert({
				name: "ArtEx 2019",
				applicantId: applicantId
			});
			return application;
		}

	},

	lockApplication(applicationId) {
		Applications.update({_id: applicationId}, {$set: {locked: true}});

		SSR.compileTemplate( 'applicationConfirmation', Assets.getText( 'email/templates/applicationConfirmation.html' ) );

		const user = Meteor.users.findOne({_id: Meteor.userId()});

		Email.send({
			to: user.emails[0].address,
			from: 'ArtEx <no-reply@artex.no>',
			subject: 'Application received',
			html: SSR.render('applicationConfirmation')
		});
	}
});